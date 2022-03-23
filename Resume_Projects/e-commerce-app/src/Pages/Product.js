import Newsletter from "../components/Newsletter";
import "./product.css";
import { Add, Remove } from "@material-ui/icons";


const wrapper = {
  padding: "50px",
  display: "flex",
};

const imgContainer = {
  flex: "1",
};

const image = {
  width: "100%",
  height: "90vh",
  objectFit: "cover",
};

const infoContainer = {
  flex: "1",
  padding: "0px 50px",
};

const title = {
  fontWeight: "200",
};

const desc = {
  margin: "20px 0px",
};

const price = {
  fontWeight: "100",
  fontSize: "40px",
};

const filterContainer = {
  width: "50%",
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
};

const filter = {
  display: "flex",
  alignItems: "center",
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

const addContainer = {
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const amountContainer = {
  display: "flex",
  alignItems: "center",
  fontWeight: "700",
};

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

const button = {
  padding: "15px",
  border: "2px solid teal",
  backgroundColor: "white",
  cursor: "pointer",
  fontWeight: "500",
};

const Product = () => {
  return (
    <>
      <div style={wrapper}>
        <div style={imgContainer}>
          <img style={image} src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>
        <div style={infoContainer}>
          <h1 style={title}>Denim Jumpsuit</h1>
          <p style={desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span style={price}>$ 20</span>
          <div style={filterContainer}>
            <div style={filter}>
              <div style={filterTitle}>Color</div>
              <div style={{...filterColor, backgroundColor:'black'}}></div>
              <div style={{...filterColor, backgroundColor:'darkblue'}}></div>
              <div style={{...filterColor, backgroundColor:'gray'}}></div>
            </div>
            <div style={filter}>
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
          <div style={addContainer}>
            <div style={amountContainer}>
              <Remove/>
              <option style={amount}>1</option>
              <Add/>
            </div>
            <button style={button}>Add To Cart</button>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Product;
