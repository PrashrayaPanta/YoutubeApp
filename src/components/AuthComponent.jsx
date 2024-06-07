const AuthComponent = ({ children }) => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return children;
  } else {
    return <h1>Not authorized</h1>;
  }
};

export default AuthComponent;
