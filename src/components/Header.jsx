import React from "react";
import { useSelector } from "react-redux";

import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar";

const Header = () => {
  const LoginUser = useSelector((state) => state.auth.userData);

  return <>{LoginUser ? <PrivateNavbar /> : <PublicNavbar />}</>;
};

export default Header;
