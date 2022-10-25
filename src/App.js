import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Home from "../src/Components/Home";
import Navigation from "../src/Components/Navigation";
import Authentication from "../src/Components/Authentication";
import Shop from "../src/ShopComponent";
import Checkout from "../src/CheckOut/CheckOut";
import { checkUserSession } from "../src/Store/User/UserAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
=======
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
>>>>>>> ed313dd86a2ac52e08920611d12af04d1068f2a3

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
