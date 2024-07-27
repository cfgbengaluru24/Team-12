import { createContext, useContext } from "react";

export const UserContext = createContext({
    user: {
        id: null,
        name: "",
        role:""
    },
    setUser: (user) => {},
});

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = UserContext.Provider;
