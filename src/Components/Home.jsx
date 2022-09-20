import { Outlet } from "react-router-dom";

import Directory from "../Components/Directory";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
