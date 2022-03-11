import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Page404() {
  return (
    <>
      <Button as={Link} to="/landingpage">
        Back
      </Button>
      <img
        src="https://www.lesprairiesdelamer.com/images/404.jpg"
        height="100%"
        width="100%"
        alt="404"
      />
    </>
  );
}

export default Page404;
