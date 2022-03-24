import Newsletter from "../components/Newsletter";
import "./product.css";
import { Add, Remove, StarHalfOutlined } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Badge, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart } from "../redux";
import { useDispatch } from "react-redux";

const price = {
  fontWeight: "600",
  fontSize: "40px",
  color: "teal",
};

const filterTitle = {
  fontSize: "20px",
  fontWeight: "200",
};

const filterColor = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  margin: "0px 5px",
  cursor: "pointer",
};

const filterSize = {
  marginLeft: "10px",
  padding: "5px",
};

const filterSizeOption = {};

const amount = {
  width: "30px",
  height: "30px",
  borderRadius: "10px",
  border: "1px solid teal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px 5px",
};

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    for(let i=0; i<value; i++){
      dispatch(addToCart(product));
    }
  };

  const handleItem = (sign) => {
    if (sign === "+") {
      setValue(value + 1);
    } else {
      setValue(value - 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <div className="d-flex justify-content-center">
        <Spinner
          animation="border"
          role="status"
          style={{ width: "150px", height: "150px" }}
        ></Spinner>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="100%"
            width="90%"
          />
        </div>
        <div className="col-md-6 px-5">
          <h6 className="text-uppercase text-black-50">{product.category}</h6>
          <h2>{product.title}</h2>
          <p className="lead">
            Rating{" "}
            <Badge bg="success">
              {product.rating && product.rating.rate}{" "}
              <StarHalfOutlined style={{ fontSize: "17px" }} />
            </Badge>
          </p>
          <p className="my-3">{product.description}</p>
          <span style={price}>${product.price}</span>
          <div className="d-flex m-3">
            <div className="col-mg-6 d-flex align-items-center">
              <div style={filterTitle}>Color</div>
              <div style={{ ...filterColor, backgroundColor: "black" }}></div>
              <div
                style={{ ...filterColor, backgroundColor: "darkblue" }}
              ></div>
              <div style={{ ...filterColor, backgroundColor: "gray" }}></div>
            </div>
            <div className="col-mg-6 d-flex align-items-center mx-5">
              <span style={filterTitle}>Size</span>
              <select style={filterSize}>
                <option style={filterSizeOption}>XS</option>
                <option style={filterSizeOption}>S</option>
                <option style={filterSizeOption}>M</option>
                <option style={filterSizeOption}>L</option>
                <option style={filterSizeOption}>XL</option>
              </select>
            </div>
          </div>
          <div className="row d-flex">
            <div className="d-flex align-item-center p-3 my-3">
              <Add
                onClick={() => handleItem("+")}
                style={{ cursor: "pointer" }}
              />
              <option style={amount}>{value}</option>
              <Remove
                onClick={() => handleItem("-")}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="col-mg-6">
            <button
              className="btn btn-outline-dark px-4 py-2 mx-3"
              to="/cart"
              onClick={() => addProduct(product)}
            >
              Add To Cart
            </button>
            <Link className="btn btn-dark px-3 py-2 mx-3" to="/cart">
              Go To Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Product;
