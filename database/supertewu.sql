SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `categoria` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Electrónica'),
(2, 'Hogar'),
(3, 'Ropa'),
(4, 'Bebidas'),
(5, 'Botana'),
(7, 'Lacteos');

CREATE TABLE `detalle_pedido` (
  `id_detalle_pedido` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `detalle_pedido` (`id_detalle_pedido`, `id_pedido`, `id_producto`, `cantidad`) VALUES
(46, 40, 2, 1),
(47, 41, 3, 10),
(48, 42, 1, 1),
(49, 43, 1, 1),
(50, 44, 1, 1),
(51, 45, 3, 2),
(52, 46, 2, 1),
(53, 47, 2, 1),
(54, 51, 2, 1),
(55, 52, 3, 1),
(56, 57, 13, 1),
(57, 58, 9, 1),
(58, 62, 14, 1),
(59, 63, 13, 1),
(60, 64, 11, 1),
(61, 66, 12, 1);

CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL,
  `fecha_pedido` datetime DEFAULT NULL,
  `total_pedido` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `pedido` (`id_pedido`, `fecha_pedido`, `total_pedido`, `id_usuario`) VALUES
(1, '2024-11-12 10:20:26', 18, 1),
(2, '2024-11-12 10:20:50', 54, 1),
(3, '2024-11-12 10:21:34', 18, 1),
(4, '2024-11-12 10:28:37', 18, 1),
(5, '2024-11-12 10:29:07', 36, 1);

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(30) DEFAULT NULL,
  `descripcion_producto` varchar(30) DEFAULT NULL,
  `precio_producto` int(50) DEFAULT NULL,
  `cantidad_producto` int(50) DEFAULT NULL,
  `id_proveedor` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `producto` (`id_producto`, `nombre_producto`, `descripcion_producto`, `precio_producto`, `cantidad_producto`, `id_proveedor`, `id_categoria`) VALUES
(1, 'Coca-Cola', 'Refresco en botella', 18, 0, 4, 4),
(2, 'Pepsi', 'Botella 600ml', 16, 0, 5, 4);

CREATE TABLE `proveedor` (
  `id_proveedor` int(11) NOT NULL,
  `nombre_proveedor` varchar(30) DEFAULT NULL,
  `telefono_proveedor` varchar(30) DEFAULT NULL,
  `direccion_proveedor` varchar(30) DEFAULT NULL,
  `correo_proveedor` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `proveedor` (`id_proveedor`, `nombre_proveedor`, `telefono_proveedor`, `direccion_proveedor`, `correo_proveedor`) VALUES
(1, 'Proveedor A', '1234567890', 'Calle Falsa 123', 'proveedorA@example.com'),
(2, 'Proveedor B', '0987654321', 'Avenida Siempreviva 456', 'proveedorB@example.com');

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Cajero');

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `cod_usuario` int(11) NOT NULL,
  `nombre_completo` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contrasena` varchar(30) DEFAULT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuario` (`id_usuario`, `cod_usuario`, `nombre_completo`, `email`, `contrasena`, `id_rol`) VALUES
(1, 1, 'Kalid Hecoch Juarez Zenil', 'kjuarez5@ucol', '123', 1),
(2, 5, 'Jonathan Jaimes Ortega', 'jjaimes@ucol.mx', '67', 1);

ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id_detalle_pedido`),
  ADD KEY `fk_detalle_pedido_pedido` (`id_pedido`),
  ADD KEY `fk_detalle_pedido_producto` (`id_producto`);

ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `fk_pedido_usuario` (`id_usuario`);

ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_producto_proveedor` (`id_proveedor`),
  ADD KEY `fk_producto_categoria` (`id_categoria`);

ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id_proveedor`);

ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `fk_usuario_rol` (`id_rol`);

ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `fk_detalle_pedido_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  ADD CONSTRAINT `fk_detalle_pedido_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_pedido_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  ADD CONSTRAINT `fk_producto_proveedor` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedor` (`id_proveedor`);

ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);

COMMIT;
