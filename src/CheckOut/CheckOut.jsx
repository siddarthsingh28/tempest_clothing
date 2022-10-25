import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../Store/Cart/CartSelector";

import CheckoutItem from "../CheckOutItem/CheckOutItem";
import PaymentForm from "../PaymentForm/PaymentFromComponent";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from "./CheckOutStyles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>

      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
