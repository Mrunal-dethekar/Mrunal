import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";


const Footer = () => {

  const LinkColor ={
    color: 'black',
    textDecoration : "none",
  }

  const container = {
    display: 'flex',
  };
  
  const left = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };
  
  const logo = {};
  
  const desc = {
    margin: '20px 0px',
  };
  
  const socialContainer = {
    display: 'flex',
  };
  
  const socialIcon = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: `lightblue`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    cursor:'pointer',
  };
  
  const center = {
    flex: '1',
    padding: '20px',
  };
  
  const title = {
    marginBottom: '30px',
  };
  
  const list = {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
  };
  
  const listItem = {
    width: '50%',
    marginBottom: '10px',
    cursor:'pointer',
  };
  
  const right = {
    flex: '1',
    padding: '20px'
  };
  
  const contactItem = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  };
  
  const payment = {
      width: '50%',
  };

  return (
    <div style={container}>
      <div style={left}>
        <h1 style={logo}>Fashion Club</h1>
        <p style={desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div style={socialContainer}>
          <div style={socialIcon} >
            <Facebook />
          </div>
          <div style={socialIcon} >
            <Instagram />
          </div>
          <div style={socialIcon} >
            <Twitter />
          </div>
          <div style={socialIcon}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div style={center}>
        <h3 style={title}>Useful Links</h3>
        <ul style={list}>
          <li style={listItem}><Link style={LinkColor} to="/">Home</Link></li>
          <li style={listItem}><Link style={LinkColor} to="/cart">Cart</Link></li>
          <li style={listItem}>Man Fashion</li>
          <li style={listItem}>Woman Fashion</li>
          <li style={listItem}>Accessories</li>
          <li style={listItem}>My Account</li>
          <li style={listItem}>Order Tracking</li>
          <li style={listItem}>Wishlist</li>
          <li style={listItem}>Wishlist</li>
          <li style={listItem}>Terms</li>
        </ul>
      </div>
      <div style={right}>
        <h3 style={title}>Contact</h3>
        <div style={contactItem}>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Delhi 442701
        </div>
        <div style={contactItem}>
          <Phone style={{marginRight:"10px"}}/> +917020441569
        </div>
        <div style={contactItem}>
          <MailOutline style={{marginRight:"10px"}} /> contact@Fashionclub.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" style={payment} />
      </div>
    </div>
  );
};

export default Footer