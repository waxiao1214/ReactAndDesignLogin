import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = ({ children, ...rest }) => {
    const isAuthed = localStorage.getItem('token')
        return (
            <Route
                {...rest}
                render = {({ location }) =>
                isAuthed ? (
                    children
                ) : (
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                    />
                )
                }
            />
            );
  }

  export default PrivateRouter;