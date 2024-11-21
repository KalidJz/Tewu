const Compra = require('../models/compraModelo');

const realizarCompra = (req, res) => {
    const { carrito, id_usuario } = req.body;

    if (!carrito || carrito.length === 0) {
        return res.status(400).json({ error: 'El carrito está vacío' });
    }
    if (!id_usuario) {
        return res.status(400).json({ error: 'ID de usuario es requerido' });
    }

    const totalPedido = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);

    Compra.crearPedido(id_usuario, totalPedido, (err, id_pedido) => {
        if (err) {
            console.error('Error al crear el pedido:', err);
            return res.status(500).json({ error: 'Error al crear el pedido' });
        }

        const operaciones = carrito.map(item => 
            new Promise((resolve, reject) => {
                // Insertar en detalle_pedido
                Compra.agregarDetallePedido(id_pedido, item.id, item.cantidad, (err, result) => {
                    if (err) return reject(err);

                    // Reducir el stock del producto
                    Compra.reducirStockProducto(item.id, item.cantidad, (err, result) => {
                        if (err) return reject(err);
                        resolve(result);
                    });
                });
            })
        );

        Promise.all(operaciones)
            .then(() => res.json({ success: true, message: 'Compra realizada exitosamente y stock actualizado' }))
            .catch(error => {
                console.error('Error al procesar la compra:', error);
                res.status(500).json({ error: 'Error al procesar la compra' });
            });
    });
};

module.exports = { realizarCompra };
