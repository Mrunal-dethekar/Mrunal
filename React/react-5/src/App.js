import "./App.css";
import { Container } from "react-bootstrap";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Page404 from "./Components/Page404";
import Count from "./Components/Count";
import { Provider } from "react-redux";
import  store  from "./redux/store";


function App() {
  return (
    <Provider store={store}>
    <Container className="px-5">
        <BrowserRouter>
        <Container className="p-0 mb-5">
          <MyNavbar className="mb-3" />
        </Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/count" element={<Count />} />
        </Routes>
    </BrowserRouter>
      </Container>
      </Provider>
  );
}

export default App;
