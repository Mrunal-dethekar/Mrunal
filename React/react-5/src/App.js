import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Posts from "./components/Posts/Posts";
import Post from './components/Post';
import About from './components/About';
import Contact from './components/Contact';
import HOC from './components/HOC';
import Page404 from './components/Page404';
import Count from './components/Count/Count';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Count />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
