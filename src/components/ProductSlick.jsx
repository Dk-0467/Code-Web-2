import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Slider from "react-slick";
import { GET_ALL } from "../api/apiServices";
import AddToCartButton from "../pages/AddToCartButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await GET_ALL("/catalog/products");
        setData(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const Loading = () => (
    <div className="text-center">
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container my-3 py-3">
      <div className="text-center">
        <h2 className="display-5" style={{ fontWeight: "700", color: "#333" }}>
          Danh Sách Sản Phẩm
        </h2>
        <hr
          style={{
            borderTop: "2px solid #333",
            width: "50%",
            margin: "0 auto",
          }}
        />
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : (
          <Slider {...settings}>
            {data.map((product) => (
              <div key={product.id} className="p-3">
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
                      height: "200px",
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
                        borderRadius: "30px",
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
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Products;
