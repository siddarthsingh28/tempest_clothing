import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../Store/Cart/CartSelector";
import { setIsCartOpen } from "../Store/Cart/CartAction";
import { ReactComponent as ShoppingIcon } from "../Assets/crown.svg";

import { CartIconContainer, ItemCount } from "./CartIconStyles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
