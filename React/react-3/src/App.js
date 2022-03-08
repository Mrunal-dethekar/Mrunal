import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent';
import Product from './Components/Product'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Product />
    </div>
  );
}

export default App;
