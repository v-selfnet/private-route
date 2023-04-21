import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Home = () => {
    const data = useContext(AuthContext);
    return (
        <div>
            <h3>Home: {data.displayName} </h3>
        </div>
    );
};

export default Home;