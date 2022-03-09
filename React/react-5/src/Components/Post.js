import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    
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
        >
          <Card.Header>User {post.userId}</Card.Header>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Like</Button>
            <Button variant="primary mx-3">Comment</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Uploaded 3 min ago</Card.Footer>
        </Card>
      ))}
    </>
  );
}

export default Post;
