import React from 'react'

const container = {
  width: '100vw',
  height: '100vh',
  background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  };

const wrapper = {
  width: '40%',
  padding: '20px',
  backgroundColor: 'white',
};

const title = {
  fontSize: '24px',
  fontWeight: '300',
};

const form = {
  display: 'flex',
  flexWrap: 'wrap',
};

const input = {
  flex: '1',
  minWidth: '40%',
  margin: '20px 10px 0px 0px',
  padding: '10px',
};

const agreement = {
  fontSize: '12px',
  margin: '20px 0px',
};

const button = {
  width: '40%',
  border: 'none',
  padding: '15px 20px',
  backgroundColor: 'teal',
  color: 'white',
  cursor: 'pointer',
};

const Register = () => {
  return (
    <div style={container}>
      <div style={wrapper}>
        <h1 style={title}>CREATE AN ACCOUNT</h1>
        <form style={form}>
          <input style={input} placeholder="last name" />
          <input style={input} placeholder="name" />
          <input style={input} placeholder="username" />
          <input style={input} placeholder="email" />
          <input style={input} placeholder="password" />
          <input style={input} placeholder="confirm password" />
          <span style={agreement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button style={button}>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register