const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer'); 
const app = express();
const PORT = 3000;

// Importa las rutas
const productosRoutes = require('./routes/productosRoutes');
const testRoutes = require('./routes/testRoutes');
const authRoutes = require('./routes/UsuarioRoutes');  // Ruta de autenticación
const categoriaRoutes = require('./routes/CategoriaRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const rolRoutes = require('./routes/rolRoutes'); 
const compraRoutes = require('./routes/compraRoutes');
const detallePedidoRoutes = require('./routes/detallePedidoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');


// Configuración de middleware
app.use(cors()); // Activa CORS para todas las rutas
app.use(express.json());

// Usa las rutas definidas en los archivos de rutas
app.use('/api', productosRoutes);
app.use('/api', testRoutes);
app.use('/api', authRoutes);  // Agrega la ruta de autenticación
app.use('/api', proveedorRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', rolRoutes);
app.use('/api', compraRoutes);
app.use('/api', detallePedidoRoutes);
app.use('/api', pedidoRoutes);




// Configuración de Nodemailer para enviar correos
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes usar otros servicios, como Outlook o Yahoo
  auth: {
      user: 'tewuenterprise@gmail.com', // Reemplaza con tu correo
      pass: 'xwol ddjw zcnd oeuh'        // Reemplaza con tu contraseña
  }
});

// Función para enviar un correo
function enviarCorreo(destinatario, asunto, mensaje) {
  const mailOptions = {
      from: 'tewuenterprise@gmail.com', // Tu correo
      to: destinatario, // Correo del destinatario
      subject: asunto, // Asunto del correo
      text: mensaje // Contenido del correo
  };

  return transporter.sendMail(mailOptions);
}


// Función para enviar un correo con la factura
function enviarFactura(destinatario, nombre, total) {
  const asunto = 'Factura';
  const mensaje = `Hola ${nombre},\n\nGracias por tu compra. El total a pagar es: $${total.toFixed(2)}.\n\n¡Que tengas un excelente día!`;

  return enviarCorreo(destinatario, asunto, mensaje);
}

// Ruta para enviar la factura por correo
app.post('/api/enviar-factura', async (req, res) => {
  const { nombre, correo, total } = req.body;

  try {
    await enviarFactura(correo, nombre, total); // Envía el correo con la factura
    res.status(200).json({ success: true, message: 'Factura enviada exitosamente' });
  } catch (error) {
    console.error('Error al enviar la factura:', error);
    res.status(500).json({ success: false, message: 'Error al enviar la factura', error });
  }
});

// Middleware para manejar errores 404 con JSON
app.use((req, res) => {
  res.status(404).json({ error: 'No se encontró la API solicitada' });
});

// Middleware para manejar errores 404 con HTML
app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1><p>La ruta que intentas acceder no existe.</p>');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});


