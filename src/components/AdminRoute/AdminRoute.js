
import { Redirect, Route } from "react-router-dom";

/**
 *
 * @param {Boolean} admin -If route is admin protected
 * @param {Object} auth -Details of authenticated User otherwise null
 * @param {Component}Component -Component to display
 * @param {string} pathname -pathname/Url
 * @returns
 */
const ProtectedRoute = (props) => {
  var { component: Component, pathname, ...restProps } = props;
  //   const admin=JSON.parse(localStorage.getItem("user")).user_type===1
  const admin = true;
  // const admin=
  return (
    <>
      {admin ? (
        <Route render={(props) => <Component {...props} />} {...restProps} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default ProtectedRoute;
