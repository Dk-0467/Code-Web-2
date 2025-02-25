-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2025 at 04:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product_catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `availability` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(19,2) NOT NULL,
  `product_name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `availability`, `category`, `description`, `image`, `price`, `product_name`) VALUES
(1, 10, 'Mô Hình Gundam', ' Mô Hình Gundam (Gunpla) Là Một Loại Mô Hình Nhựa Được Gọi Là Model Kit, Bao Gồm Nhiều Mảnh Nhựa Rời Được Gọi Là Part (Bộ Phận), Khi Lắp Ráp Các Part Lại Với Nhau Sẽ Được Mô Hình Hoàn Chỉnh. Các Mảnh Nhựa Rời Này Được Gắn Trên Khung Nhựa Gọi Là Runner.', 'https://bizweb.dktcdn.net/100/479/026/products/vn-11134207-7r98o-lqinnu7vn1761c-1705295504374.jpg?v=1705295518020', 140000.00, 'Mô Hình Lắp Ráp HG 1/144 Gundam Calibarn'),
(2, 10, 'Mô Hình Gundam', 'Mô Hình Lắp Ráp MG 1/100 Gundam Epyon EW (Sturm und Drang Unit) Bandai\r\n- Sản phậm nhựa cao cấp với độ sắc nét cao\r\n- Sản xuất bởi Bandai Namco – Nhật Bản Chính hãng\r\n- An toàn với trẻ em', 'https://bizweb.dktcdn.net/100/479/026/products/vn-11134207-7r98o-lqex3r5jzp3mc5-1705069859864.jpg?v=1705069994920', 2699000.00, 'Mô Hình Lắp Ráp MG 1/100 Gundam Epyon EW'),
(3, 10, 'Mô Hình Gundam', 'Mô Hình Lắp Ráp HG 1/144 Gundam Lfrith Anavata Bandai 4573102660268\r\n- Sản Phẩm Nhựa Cao Cấp Với Độ Sắc Nét Cao\r\n- Sản Xuất Bởi Bandai Namco – Nhật Bản\r\n- An Toàn Với Trẻ Em\r\n- Phát Triển Trí Não Cho Trẻ Hiệu Quả Đi Đôi Với Niềm Vui Thích Bất Tận', 'https://bizweb.dktcdn.net/100/479/026/products/vn-11134207-7r98o-lqev89rx7kk20b-1705069850707.jpg?v=1705069989473', 880000.00, 'Mô Hình Lắp Ráp HG 1/144 Gundam Lfrith Anavata'),
(4, 10, 'Mô Hình Gundam', 'Mô Hình Lắp Ráp HG 1/144 DEMI GARRISON Bandai\r\n- Sản Phẩm Nhựa Cao Cấp Với Độ Sắc Nét Cao\r\n- Sản Xuất Bởi Bandai Namco – Nhật Bản\r\n- An Toàn Với Trẻ Em\r\n- Phát Triển Trí Não Cho Trẻ Hiệu Quả Đi Đôi Với Niềm Vui Thích Bất Tận\r\n', 'https://bizweb.dktcdn.net/100/479/026/products/vn-11134207-7r98o-lqew8xotr5cif8-1705069842813.jpg?v=1705069980817', 899000.00, 'Mô Hình Lắp Ráp HG 1/144 DEMI GARRISON'),
(5, 10, 'Mô Hình Gundam', 'Mô Hình Lắp Ráp SD BB165 MUSHA TORLGIS 4573102663566\r\n- Sản phậm nhựa cao cấp với độ sắc nét cao\r\n- Sản xuất bởi Bandai Namco – Nhật Bản Chính hãng\r\n- Phát triển trí não cho trẻ hiệu quả đi đôi với niềm vui thích bất tận\r\n- Rèn luyện tính kiên nhẫn', 'https://bizweb.dktcdn.net/100/479/026/products/vn-11134207-7r98o-lqc2sictqmnr1e-1704903879174.jpg?v=1704903903287', 139000.00, 'Mô Hình Lắp Ráp SD BB165 MUSHA TORLGIS'),
(6, 10, 'Mô Hình Gundam', '=> THÔNG TIN SẢN PHẨM\r\nTỷ lệ: 1/144\r\nXuất xứ: Nhật Bản. Sản phẩm của hãng Bandai Nhật Bản.\r\nChất liệu: nhựa cao cấp, an toàn cho bé.\r\nĐộ tuổi phù hợp: Trẻ từ 8 tuổi trở lên.\r\nMô hình Gundam hoàn thiện cao khoảng 13 cm.', 'https://bizweb.dktcdn.net/100/479/026/products/0616ead5fdf93d4095b45f8941bf8ddb-1679720488668.jpg?v=1679720496067', 649000.00, 'Mô Hình Lắp Ráp RG 1/144 Gundam Astray Gold Frame Amatsu Mina'),
(7, 10, 'Mô Hình Gundam', 'THƯƠNG HIỆU : BANDAI – NHẬT BẢN\r\nPHIÊN BẢN : HG 1/144\r\nChiều cao: 13-16cm\r\nPHÂN LOẠI SP : LẮP RÁP', 'https://bizweb.dktcdn.net/100/479/026/products/914325b2bca7fc9f144abd2ca8df5d7d-1679722565894.jpg?v=1679722571837', 450000.00, 'Mô hình lắp ráp HG CE Infinite Justice'),
(8, 10, 'Mô Hình Gundam', 'Mô Hình Lắp Ráp Gundam HG TWFM Lfrith Thorn (The Witch from Mercury) Bandai 4573102650979\r\n\r\n- Sản phậm nhựa cao cấp với độ sắc nét cao\r\n- Sản xuất bởi Bandai Namco – Nhật Bản Chính hãng\r\n- An toàn với trẻ em\r\n- Phát triển trí não cho trẻ hiệu quả đi đôi ', 'https://bizweb.dktcdn.net/100/479/026/products/vn-11134201-7qukw-ler24ulu6r2i70-1679653212731.jpg?v=1679653216757', 339000.00, 'Mô Hình Lắp Ráp Gundam HG TWFM Lfrith Thorn '),
(9, 10, 'Mô hình transformer', 'Ưu điểm: Mô hình transformer chất lượng nhựa ABS ( nhựa cao cấp)\r\n- Sản Phậm Nhựa Cao Cấp Với Độ Sắc Nét Cao , Giá Cả Hợp Lý.\r\n- An Toàn Với Trẻ Em\r\n- Phát Triển Trí Não Cho Trẻ Hiệu Quả Đi Đôi Với Niềm Vui Thích Bất Tận\r\n- Rèn Luyện Tính Kiên Nhẫn', 'https://bizweb.dktcdn.net/100/479/026/products/0b12d156d45228945727be144b77a71b-1680966845360.jpg?v=1680966852183', 249000.00, 'Mô hình Tranformer Optimus YS-04 BMB (KO SS38)'),
(10, 10, 'Mô hình transformer', 'Mô hình Optimus Prime Evasion H6003-6 BMB HMK09 Transformers Oversize Thương Hiệu: Black Mamba (BMB) Kích thước: dạng robot 30cm Chuyển được dạng robot sang xe và ngược lại Đóng gói: Đóng hộp Ưu điểm: Mô hình transformer chất lượng nhựa ABS\r\n', 'https://bizweb.dktcdn.net/100/479/026/products/bd41f05b-ba09-48f2-81f2-91094b6cd11b.jpg?v=1680966676443', 749000.00, 'Mô hình Optimus Prime Evasion H6003-6 '),
(11, 10, 'Mô hình transformer', 'Mô hình Transformers YS-01C Bumblebee BMB (dạng xe camaro) Thương Hiệu: Black Mamba (BMB) Kích thước: dạng robot 23cm, dạng xe dài 23cm Đóng gói: Đóng hộp Ưu điểm: Mô hình transformer chất lượng nhựa ABS ( nhựa cao cấp) - Sản Phậm Nhựa Cao Cấp ', 'https://bizweb.dktcdn.net/100/479/026/products/84bc3e39-9b64-4aca-80a6-5e2270518771.jpg?v=1680963420787', 219000.00, 'Mô hình Transformers YS-01C Bumblebee BMB'),
(12, 10, 'Mô hình transformer', 'Mô hình Transformer Sideswipe BmB LS-08 Thương Hiệu: Black Mamba (BMB) Kích thước: dạng robot 17cm Chuyển được dạng robot sang xe và ngược lại Đóng gói: Đóng hộp Ưu điểm: Mô hình transformer chất lượng nhựa ABS ( nhựa cao cấp)', 'https://bizweb.dktcdn.net/100/479/026/products/6bdf8cef-256c-4eeb-953f-40bb00f5de76.jpg?v=1679034675043', 599000.00, 'Mô hình Transformer Sideswipe BmB LS08'),
(13, 10, 'Mô hình transformer', 'Mô hình Transformer Sideswipe BmB LS-08 Thương Hiệu: Black Mamba (BMB) Kích thước: dạng robot 17cm Chuyển được dạng robot sang xe và ngược lại Đóng gói: Đóng hộp Ưu điểm: Mô hình transformer chất lượng nhựa ABS ( nhựa cao cấp)', 'https://bizweb.dktcdn.net/100/479/026/products/9721b04a-cb91-4583-853a-4537fddf94ea.jpg?v=1679027531113', 370000.00, 'Mô hình Transformers Hasbro Studio Series Deluxe'),
(14, 10, 'Phụkiện', 'Giá trưng bày Gundam HG RG Action Base 2 (Display) Bandai\r\nChính hãng Bandai Nhật Bản\r\nCHUYÊN DỤNG ĐỂ TRƯNG BÀY GUNDAM TỶ LỆ 1/144 RG/HG/SD\r\n- ĐỘ BỀN CAO\r\n- XOAY CHUYỂN NHIỀU GÓC ĐỘ VÀ ĐỘ CAO DỂ DÀNG\r\n- 4 ĐẦU CẮM THAY ĐỔI ĐƯỢC ĐỂ PHÙ HỢP VỚI TỪNG ', 'https://bizweb.dktcdn.net/100/479/026/products/sg-11134201-23010-wp1hb4z6ccmv89-1679671497805.jpg?v=1679671539147', 109000.00, 'Giá trưng bày Gundam HG RG Action Base 2 Black Đen'),
(15, 10, 'Phụkiện', 'Đế trưng bày Action Base 1 Display Bandai\r\nSản xuất chính hãng bandai\r\n- CHUYỂN DỤNG ĐỂ TRƯNG BÀY GUNDAM cho các TỶ LỆ 1/144 RG/HG/MG\r\n- ĐỘ BỀN CAO\r\n- XOAY CHUYỂN NHIỀU GÓC ĐỘ VÀ ĐỘ CAO DỂ DÀNG\r\n- 4 ĐẦU CẮM THAY ĐỔI ĐƯỢC ĐỂ PHÙ HỢP VỚI TỪNG LOẠI MÔ HÌNH\r\n', 'https://bizweb.dktcdn.net/100/479/026/products/f3fbcf9c-dd90-4643-aefd-04ce8101e4ac.jpg?v=1679670917030', 129000.00, 'Đế trưng bày Action Base 1'),
(16, 10, 'Phụkiện', 'Giá trưng bày Gundam Action Base 4 Display HG RG MG Bandai\r\nSản xuất chính hãng bandai\r\n- Màu: Trong suốt\r\n- CHUYỂN DỤNG ĐỂ TRƯNG BÀY GUNDAM TỶ LỆ 1/144 - 1/100 RG/HG/MG\r\n- ĐỘ BỀN CAO\r\n- XOAY CHUYỂN NHIỀU GÓC ĐỘ VÀ ĐỘ CAO DỂ DÀNG\r\n- Rất nhiều ĐẦU CẮM THAY', 'https://bizweb.dktcdn.net/100/479/026/products/4df52e5923f82001e91c886bc2a7c855-1679669952274.jpg?v=1679669956733', 159000.00, 'Giá trưng bày Gundam Action Base 4 Display HG RG MG trong suốt');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
