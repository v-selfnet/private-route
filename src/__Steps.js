/***
 * 1. create components & setup nested route
 * 2. setup tailwind/daisy & create login/register form
 * 3. setup context API & send data between components [AuthProvider.jsx]
 *      a. Create Context: AuthProvider.jsx:
 *          import React, { createContext } from 'react';
            export const AuthContext = createContext(null);
            const AuthProvider = ({children}) => {
                const data = 'data data data';
                return (
                    <AuthContext.Provider value={data}>
                        {children}
                    </AuthContext.Provider>
                );
            };
            export default AuthProvider;
        b. Router Setup: main.jsx:
            <AuthProvider>
                <RouterProvider router={router}></RouterProvider>
            </AuthProvider>
        c. Receive data: Home.jsx
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
    4. setup firebase 
    5. create register, signin 
    6. display current user status on navbar
        a. onAuthStateChanged: [AuthProvider.jsx]
            useEffect( () => {
                const unsubscribe = onAuthStateChanged(auth, currentUser => {
                    setUser(currentUser);
                });
                return () => unsubscribe(); // stop observation
            }, []);
    7. create signout built-in firebase function 
    8. implement private route
 * 
 ***/