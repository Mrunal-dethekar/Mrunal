import React, { useEffect, useState } from "react";
import Product from "./Product";
import{ Spinner } from "react-bootstrap"

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMount = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch("http://fakestoreapi.com/products");
      if (componentMount) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <Spinner animation="border" role="status" style={{width:'150px',height :'150px'}}>
        </Spinner>
      </>
    );
  };

  const filterProduct = (cat)=>{
    const updatedList = data.filter((product)=>product.category===cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
