import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GET_ALL } from "../api/apiServices";
import AddToCartButton from "../pages/AddToCartButton"; // Import AddToCartButton

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Số sản phẩm hiển thị trên mỗi trang

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await GET_ALL("/catalog/products");
        setData(response);
        setFilter(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
    setCurrentPage(1); // Reset về trang đầu tiên khi lọc sản phẩm
  };

  const formatPrice = (price) => {
    const priceInVND = price * 1;
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(priceInVND);
  };

  // Tính tổng số trang
  const totalPages = Math.ceil(filter.length / productsPerPage);

  // Xác định danh sách sản phẩm cần hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const Pagination = () => (
    <div className="d-flex justify-content-center my-4">
      <button
        className="btn btn-outline-dark mx-2"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Trước
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`btn mx-1 ${
            currentPage === i + 1 ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="btn btn-outline-dark mx-2"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Sau →
      </button>
    </div>
  );

  const Loading = () => (
    <div className="col-12 text-center">
      <Skeleton height={40} width={560} count={1} />
      <div className="row">
        {[...Array(4)].map((_, index) => (
          <div className="col-md-3 col-sm-6 col-12 mb-4" key={index}>
            <Skeleton height={350} />
          </div>
        ))}
      </div>
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button
          className="btn btn-outline-dark m-2"
          style={{
            fontSize: "1.0rem",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark m-2"
          style={{
            fontSize: "1.0rem",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => filterProduct("Mô Hình Gundam")}
        >
          Mô Hình Gundam
        </button>
        <button
          className="btn btn-outline-dark m-2"
          style={{
            fontSize: "1.0rem",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => filterProduct("Mô hình transformer")}
        >
          Mô Hình Transformer
        </button>
        <button
          className="btn btn-outline-dark m-2"
          style={{
            fontSize: "1.0rem",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => filterProduct("Phụkiện")}
        >
          Phụ Kiện
        </button>{" "}
      </div>

      <div className="row">
        {currentProducts.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 col-12 mb-4">
            <div
              className="card text-center h-100"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                borderRadius: "12px",
                transition: "transform 0.3s",
              }}
            >
              <img
                className="card-img-top p-3"
                src={product.image}
                alt={product.title}
                style={{
                  height: "300px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  {product.productName}
                </h5>
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item lead"
                  style={{
                    fontSize: "1.2rem",
                    color: "#d32f2f",
                    fontWeight: "bold",
                  }}
                >
                  Giá: {formatPrice(product.price)}
                </li>
              </ul>
              <div className="card-body">
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-dark m-1"
                  style={{
                    backgroundColor: "#0060c9",
                    borderColor: "#333",
                    borderRadius: "10px",
                    padding: "8px 18px",
                    fontSize: "0.85rem",
                  }}
                >
                  Xem ngay
                </Link>
                <AddToCartButton product={product} quantity={1} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hiển thị phân trang nếu có hơn 1 trang */}
      {totalPages > 1 && <Pagination />}
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <hr
            style={{
              borderTop: "2px solid #333",
              width: "50%",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
