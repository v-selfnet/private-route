import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';

const Signin = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null);

    const handelSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        setError(''); setSuccess('');

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user.email;
            setSuccess('Signin Success: ', loggedUser);
            form.reset();
            })
            .catch(error => {
                setError('Error Signin :)', error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Please Signin!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignin} className="card-body">
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span></label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Password</span></label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a></label>
                            
                            {/* Error, Success Message */}
                            <label className="label">
                                <span className="label-text text-green-500">{success}</span></label>
                            <label className="label">
                                <span className="label-text text-red-500">{error}</span></label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signin</button>
                        </div>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Signin;