import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Card
          className="my-2"
          bg="dark"
          text="light"
          border="primary"
          key={post.id}
          as={Link}
          to={`/posts/${post.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card.Header>User {post.userId}</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Like</Button>
            <Button variant="primary mx-3">Comment</Button>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            Uploaded {Math.floor(Math.random() * 60)} min ago
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}

export default Post;
