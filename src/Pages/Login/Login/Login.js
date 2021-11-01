import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                // setUsers(result.user);
            })
    }
    return (
        <div className="mb-5 mt-5">
            <h2>Please Login</h2>

            <button onClick={handleGoogleLogin} className="btn btn-warning mb-5"> <i className="fab fa-google text-info"></i> Sign up with Google</button>
            <br /> <br /> <br />
        </div>
    );
};

export default Login;