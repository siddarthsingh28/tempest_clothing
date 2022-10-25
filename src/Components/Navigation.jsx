import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../Components/CartIcon";
import CartDropdown from "../Components/CartDropDown";

import { selectIsCartOpen } from "../Store/Cart/CartSelector";
import { selectCurrentUser } from "../Store/User/UserSelector";
import { signOutStart } from "../Store/User/UserAction";

import { ReactComponent as CrwnLogo } from "../Assets/crown.svg";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer
} from "./NavigationStyles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
