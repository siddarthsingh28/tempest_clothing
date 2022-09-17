import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../Components/CartIcon";
import { UserContext } from "./UserContext";
import CartDropDown from "./CartDropDown";
import { ReactComponent as CrwnLogo } from "../Assets/crown.svg";
import { signOutUser } from "../Utils/Firebase";
import { CartContext } from "../CartContext";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from "./NavigationStyles";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
