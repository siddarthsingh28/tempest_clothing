import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Authentication from "./Components/Authentication";
import Shop from "../src/ShopComponent";
import CheckOut from "./CheckOut/CheckOut";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="Checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
