import SignUpForm from "../Components/SignUp";
import SignInForm from "../Components/SignInform";

import { AuthenticationContainer } from "./AuthenticationStyle";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
