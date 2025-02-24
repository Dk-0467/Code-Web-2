import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { GET_ALL } from "../api/apiServices";
import { Footer, Navbar } from "../components";
import AddToCartButton from "./AddToCartButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  // Tỷ giá USD sang VND (ví dụ)
  const convertToVND = (price) => {
    const exchangeRate = 1; // Tỷ giá ví dụ, bạn có thể lấy từ API thực tế
    return price * exchangeRate;
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await GET_ALL(`/catalog/products/${id}`);
        setProduct(response);

        const similarResponse = await GET_ALL(
          `/catalog/products?category=${response.category}`
        );
        setSimilarProducts(similarResponse);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={300} width={300} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid rounded shadow"
                src={product.image}
                alt={product.productName}
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </div>
            <div className="col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5 font-weight-bold">{product.productName}</h1>
              <h3 className="display-15 my-2 text-primary">
                {convertToVND(product.price).toLocaleString("vi-VN")} VND
              </h3>
              <p className="lead">{product.description}</p>
              <div className="d-flex align-items-center my-4">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <input
                  type="number"
                  className="form-control mx-2"
                  value={quantity}
                  min="1"
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value)))
                  }
                  style={{ width: "70px" }}
                />
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              <AddToCartButton product={product} quantity={quantity} />
              <Link to="/cart" className="btn btn-dark mx-3">
                Đi đến giỏ hàng
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4">
      <Slider {...settings}>
        {similarProducts.map((item) => (
          <div key={item.id} className="card text-center p-3">
            <img
              className="card-img-top p-3 rounded shadow"
              src={item.image}
              alt={item.productName}
              height={200}
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.productName.substring(0, 15)}...
              </h5>
            </div>
            <div className="card-body">
              <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                Xem ngay
              </Link>
              <AddToCartButton product={product} quantity={quantity} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? <Loading /> : product && <ShowProduct />}
        <h3 className="mt-5 font-weight-bold">Sản phẩm tương tự</h3>
        {loading ? <Loading /> : <ShowSimilarProduct />}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
