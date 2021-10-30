import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="mb-5 mt-5">
            <h2>Please Login</h2>

            <button onClick={signInUsingGoogle} className="btn btn-warning mb-5"> <i className="fab fa-google text-info"></i> Sign up with Google</button>
            <br /> <br /> <br />
        </div>
    );
};

export default Login;