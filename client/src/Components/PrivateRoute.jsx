import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component, auth, ...rest }) {
  console.log(auth);
  return (
    <Route
      {...rest}
      render={props =>
        auth.token ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/SignIn",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(PrivateRoute);
