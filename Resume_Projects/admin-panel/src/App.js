import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userInputs, productInputs } from "./formSource"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List addNew="users"/>} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List addNew="products"/>} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Products"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
