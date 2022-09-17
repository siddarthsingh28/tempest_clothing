import SignUpForm from "./SignUp";
import SignInForm from "./SignInform";

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
