
import { Redirect, Route } from "react-router-dom";

/**
 *
 * @param {Boolean} admin -If route is admin protected
 * @param {Object} auth -Details of authenticated User otherwise null
 * @param {Component}Component -Component to display
 * @param {string} pathname -pathname/Url
 * @returns
 */
const SalonRoute = (props) => {
  var { component: Component, pathname, ...restProps } = props;
    const salon=JSON.parse(localStorage.getItem("user")).user_type===3;
  // const salon = true;
  return (
    <>
      {salon ? (
        <Route render={(props) => <Component {...props} />} {...restProps} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default SalonRoute;
