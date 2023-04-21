import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelSignout = () => {
        logOut()
            .then(() => console.log('loggedout success'))
            .catch(error => console.error(error.message))
    }

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/signin'>Signin</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

            {

                user ? <>
                    <span>{user.email}</span>
                    <button className='btn btn-xs' onClick={handelSignout}>Signout</button>
                </> :
                    <button className='btn btn-xs'>
                        <Link to='/signin'>Signin</Link>
                    </button>


            }
        </div>

    );
};

export default Header;