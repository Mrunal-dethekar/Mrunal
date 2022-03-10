import "./App.css";
import { Container } from "react-bootstrap";
import Post from "./Components/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/Navbar.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Container className="px-5">
        <Container className="p-0 mb-5">
          <MyNavbar className="mb-3" />
        </Container>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/posts" element={<Post />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
