import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const container = {};

const wrapper = {
  padding: "20px",
};

const title = {
  fontWeight: "300",
  textAlign: "center",
};

const top = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
};

const topButton = {
  padding: "10px",
  fontWeight: "600",
  cursor: "pointer",
};

const topTexts = {};

const topText = {
  textDecoration: "underline",
  cursor: "pointer",
  margin: "0px 10px",
};

const bottom = {
  display: "flex",
  justifyContent: "space-between",
};

const info = {
  flex: "3",
};

const product = {
  display: "flex",
  justifyContent: "space-between",
};

const productDetail = {
  flex: "2",
  display: "flex",
};

const image = {
  width: "200px",
};

const details = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
};

const productName = {};

const productId = {};

const productColor = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
};

const productSize = {};

const priceDetail = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const productAmountContainer = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const productAmount = {
  fontSize: "24px",
  margin: "5px",
};

const productPrice = {
  fontSize: "30px",
  fontWeight: "200",
};

const hr = {
  backgroundColor: "#eee",
  border: "none",
  height: "1px",
};

const summary = {
  flex: "1",
  border: "0.5px solid lightgray",
  borderRadius: "10px",
  padding: "20px",
  height: "50vh",
};

const summaryTitle = {
  fontWeight: "200",
};

const summaryItem = {
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
};

const summaryItemText = {};

const summaryItemPrice = {};

const button = {
  width: "100%",
  padding: "10px",
  backgroundColor: "black",
  color: "white",
  fontWeight: "600",
};

const Cart = () => {
  return (
    <div style={container}>
      <Navbar />
      <Announcement />
      <div style={wrapper}>
        <h1 style={title}>YOUR BAG</h1>
        <div style={top}>
          <button
            style={topButton}
          >
            CONTINUE SHOPPING
          </button>
          <div style={topTexts}>
            <span style={topText}>Shopping Bag(2)</span>
            <span style={topText}>Your Wishlist (0)</span>
          </div>
          <button
            style={{
              ...topButton,
              border: "none",
              backgroundColor: `${'filled' === "filled" ? "black" : "transparent"}`,
              color: `${'filled' === "filled" && "white"}`,
            }}          >
            CHECKOUT NOW
          </button>
        </div>
        <div style={bottom}>
          <div style={info}>
            <div style={product}>
              <div style={productDetail}>
                <img
                  style={image}
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div style={details}>
                  <span style={productName}>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span style={productId}>
                    <b>ID:</b> 93813718293
                  </span>
                  <div style={{...productColor, backgroundColor: "black",}}/>
                  <span style={productSize}>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div style={priceDetail}>
                <div style={productAmountContainer}>
                  <Add />
                  <div style={productAmount}>2</div>
                  <Remove />
                </div>
                <div style={productPrice}>$ 30</div>
              </div>
            </div>
            <hr style={hr} />
            <div style={product}>
              <div style={productDetail}>
                <img
                  style={image}
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                />
                <div style={details}>
                  <span style={productName}>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span style={productId}>
                    <b>ID:</b> 93813718293
                  </span>
                  <div style={{...productColor,backgroundColor: "gray",}} />
                  <span style={productSize}>
                    <b>Size:</b> M
                  </span>
                </div>
              </div>
              <div style={priceDetail}>
                <div style={productAmountContainer}>
                  <Add />
                  <div style={productAmount}>1</div>
                  <Remove />
                </div>
                <div style={productPrice}>$ 20</div>
              </div>
            </div>
          </div>
          <div style={summary}>
            <h1 style={summaryTitle}>ORDER SUMMARY</h1>
            <div style={summaryItem}>
              <span style={summaryItemText}>Subtotal</span>
              <span style={summaryItemPrice}>$ 80</span>
            </div>
            <div style={summaryItem}>
              <span style={summaryItemText}>Estimated Shipping</span>
              <span style={summaryItemPrice}>$ 5.90</span>
            </div>
            <div style={summaryItem}>
              <span style={summaryItemText}>Shipping Discount</span>
              <span style={summaryItemPrice}>$ -5.90</span>
            </div>
            <div style={{...summaryItem, fontWeight:"500", fontSize:"24px"}}>
              <span style={summaryItemText}>Total</span>
              <span style={summaryItemPrice}>$ 80</span>
            </div>
            <button style={button}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
