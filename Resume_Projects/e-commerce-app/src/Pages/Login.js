import React from 'react'

const container = {
  width: '100vw',
  height: '100vh',
  background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  };

const wrapper = {
  width: '25%',
  padding: '20px',
  backgroundColor: 'white',
};

const title = {
  fontSize: '24px',
  fontWeight: '300',
};

const form = {
  display: 'flex',
  flexDirection: 'column',
};

const input = {
  flex: '1',
  minWidth: '40%',
  margin: '10px 0',
  padding: '10px',
};

const button = {
  width: '40%',
  border: 'none',
  padding: '15px 20px',
  backgroundColor: 'teal',
  color: 'white',
  cursor: 'pointer',
  marginBottom: '10px',
};

const link = {
  margin: '5px 0px',
  fontSize: '12px',
  textDecoration: 'underline',
  cursor: 'pointer',
};

const Login = () => {
  return (
    <div style={container}>
      <div style={wrapper}>
        <h1 style={title}>SIGN IN</h1>
        <form style={form}>
          <input style={input} placeholder="Username" />
          <input style={input} placeholder="Password" />
          <button style={button}>LOGIN</button>
          <a style={link}>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a style={link}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};
export default Login