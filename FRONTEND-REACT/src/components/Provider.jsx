import React, { createContext, useState } from "react";

export const AppContext = createContext();

const TokenProvider = (props) => {
    const [token, setToken] = useState('');

    return (
        <AppContext.Provider value={[token, setToken]}>
            {props.children}
        </AppContext.Provider>
    );
};

export default TokenProvider;
