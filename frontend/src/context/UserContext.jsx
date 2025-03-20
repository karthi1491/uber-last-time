import { createContext } from "react";


const UserDataContext = createContext();


const UserContext = ({children}) =>{


    return(
        <UserDataContext.Provider>
            {children}
        </UserDataContext.Provider>
    )

}

export default UserContext