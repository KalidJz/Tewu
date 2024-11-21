-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-11-2024 a las 03:01:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `supertewu`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'Electrónica'),
(2, 'Hogar'),
(3, 'Ropa'),
(4, 'Bebidas'),
(5, 'Botana'),
(7, 'Lacteos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id_detalle_pedido` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_pedido`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL,
  `fecha_pedido` datetime DEFAULT NULL,
  `total_pedido` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id_pedido`, `fecha_pedido`, `total_pedido`, `id_usuario`) VALUES
(1, '2024-11-12 10:20:26', 18, 1),
(2, '2024-11-12 10:20:50', 54, 1),
(3, '2024-11-12 10:21:34', 18, 1),
(4, '2024-11-12 10:28:37', 18, 1),
(5, '2024-11-12 10:29:07', 36, 1),
(6, '2024-11-12 10:32:31', 90, 1),
(7, '2024-11-12 13:15:53', 36, 1),
(8, '2024-11-12 15:44:02', 0, 1),
(9, '2024-11-12 15:45:54', 16, 1),
(10, '2024-11-12 15:48:29', 16, 1),
(11, '2024-11-12 15:50:34', 16, 1),
(12, '2024-11-12 16:28:23', -90, 1),
(13, '2024-11-13 15:20:49', 60, 1),
(14, '2024-11-13 15:35:15', 25, 1),
(15, '2024-11-13 15:36:25', 25, 1),
(16, '2024-11-13 15:37:12', 25, 1),
(17, '2024-11-13 15:37:44', 25, 1),
(18, '2024-11-13 15:38:50', 16, 1),
(19, '2024-11-13 15:39:34', 25, 1),
(20, '2024-11-13 15:40:19', 25, 1),
(21, '2024-11-13 15:41:15', 25, 1),
(22, '2024-11-13 15:42:34', 25, 1),
(23, '2024-11-13 15:43:47', 41, 1),
(24, '2024-11-13 15:45:27', 25, 1),
(25, '2024-11-13 15:46:59', 25, 1),
(26, '2024-11-13 15:48:18', 25, 1),
(27, '2024-11-13 15:56:02', 18, 1),
(28, '2024-11-13 16:00:54', 25, 1),
(29, '2024-11-13 16:01:39', 175, 1),
(30, '2024-11-13 16:08:43', 25, 1),
(31, '2024-11-13 16:14:26', 50, 1),
(32, '2024-11-13 17:16:31', 16, 1),
(33, '2024-11-13 17:19:53', 1, 1),
(34, '2024-11-13 17:28:28', 1, 1),
(35, '2024-11-13 17:29:07', 50, 1),
(36, '2024-11-13 17:36:54', 17, 1),
(37, '2024-11-13 21:47:12', 18, 1),
(38, '2024-11-13 21:49:22', 36, 1),
(39, '2024-11-13 21:50:43', 47, 1),
(40, '2024-11-14 10:20:43', 16, 1),
(41, '2024-11-14 10:39:07', 250, 1),
(42, '2024-11-14 11:22:56', 18, 1),
(43, '2024-11-14 11:23:21', 18, 1),
(44, '2024-11-14 11:24:34', 18, 1),
(45, '2024-11-14 15:17:07', 50, 1),
(46, '2024-11-14 16:13:28', 16, 1),
(47, '2024-11-18 14:15:59', 16, 1),
(51, '2024-11-18 15:54:46', 16, 1),
(52, '2024-11-18 15:56:27', 25, 1),
(57, '2024-11-18 16:55:20', 35, 1),
(58, '2024-11-18 17:27:27', 45, 5),
(62, '2024-11-18 19:54:19', 55, 1),
(63, '2024-11-18 19:56:56', 35, 1),
(64, '2024-11-18 19:57:17', 10, 1),
(66, '2024-11-18 20:00:23', 22, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(30) DEFAULT NULL,
  `descripcion_producto` varchar(30) DEFAULT NULL,
  `precio_producto` int(50) DEFAULT NULL,
  `cantidad_producto` int(50) DEFAULT NULL,
  `id_proveedor` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre_producto`, `descripcion_producto`, `precio_producto`, `cantidad_producto`, `id_proveedor`, `id_categoria`) VALUES
(1, 'Coca-Cola', 'Refresco en botella', 18, 0, 4, 4),
(2, 'Pepsi', 'Botella 600ml', 16, 0, 5, 4),
(3, 'Fabuloso', 'Fabulostaticnco', 25, 7, 2, 2),
(6, 'Arroz', 'Grano largo', 20, 100, 1, 1),
(7, 'Frijoles', 'Negros refritos', 25, 80, 2, 2),
(8, 'Azúcar', 'Blanca refinada', 18, 50, 1, 2),
(9, 'Aceite', 'Vegetal', 45, 29, 2, 1),
(10, 'Cereal', 'De chocolate', 40, 20, 1, 1),
(11, 'Sal', 'Yodada', 10, 59, 2, 2),
(12, 'Leche', 'Entera', 22, 89, 1, 2),
(13, 'Harina', 'De trigo', 35, 68, 2, 1),
(14, 'Café', 'Soluble', 55, 39, 1, 1),
(15, 'Refresco', 'De cola', 30, 120, 4, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `id_proveedor` int(11) NOT NULL,
  `nombre_proveedor` varchar(30) DEFAULT NULL,
  `telefono_proveedor` varchar(30) DEFAULT NULL,
  `direccion_proveedor` varchar(30) DEFAULT NULL,
  `correo_proveedor` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`id_proveedor`, `nombre_proveedor`, `telefono_proveedor`, `direccion_proveedor`, `correo_proveedor`) VALUES
(1, 'Proveedor A', '1234567890', 'Calle Falsa 123', 'proveedorA@example.com'),
(2, 'Proveedor B', '0987654321', 'Avenida Siempreviva 456', 'proveedorB@example.com'),
(3, 'Proveedor C', '5555555555', 'Calle Luna 789', 'proveedorC@example.com'),
(4, 'Coca-Cola', '800-704-4400', 'Rubén Darío 115 Col. Bosque de', 'cocacola@ent.mx'),
(5, 'Sabritas', '01 800 90 19 500', 'pepsiland', '1800@pepsico.com'),
(6, 'Gamesa', '6019521325', '1600 Fake Street', 'gamesa@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Cajero');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `cod_usuario` int(11) NOT NULL,
  `nombre_completo` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contrasena` varchar(30) DEFAULT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `cod_usuario`, `nombre_completo`, `email`, `contrasena`, `id_rol`) VALUES
(1, 1, 'Kalid Hecoch Juarez Zenil', 'kjuarez5@ucol', '123', 1),
(2, 5, 'Jonathan Jaimes Ortega', 'jjaimes@ucol.mx', '67', 1),
(3, 6, 'Viry', 'edrtfyui@dtfgyuhij.com', '4789', 2),
(4, 7, 'Elias Emanuel Ruelas Garcia', 'clopez89@ucol.mx', 'Cewqsqs', 1),
(5, 3, 'David', 'jjaimes@ucol.mx', '345', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id_detalle_pedido`),
  ADD KEY `fk_detalle_pedido_pedido` (`id_pedido`),
  ADD KEY `fk_detalle_pedido_producto` (`id_producto`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `fk_pedido_usuario` (`id_usuario`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_producto_proveedor` (`id_proveedor`),
  ADD KEY `fk_producto_categoria` (`id_categoria`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id_proveedor`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `fk_usuario_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id_detalle_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id_proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `fk_detalle_pedido_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalle_pedido_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_pedido_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_producto_proveedor` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedor` (`id_proveedor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
