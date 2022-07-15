import * as React from 'react'

export type AuthUser = {
    name : string
    email : string
}

// initial value type assertion
export const UserContext = React.createContext({} as UserContextType)
type UserContextType = {
    user : AuthUser | null
    setUser : React.Dispatch<React.SetStateAction<AuthUser | null>> 
}

export type UserContextProviderProps = {
    children : React.ReactNode
}

export function UserContextProvider ( { children }: UserContextProviderProps) {
    // user status can be either 1) logged in(type should be AuthUser) 2) logged out(type should be null)
    const [user, setUser] = React.useState<AuthUser | null>(null)
  return (
    < UserContext.Provider value={ {user, setUser}} >
        {children}
    </UserContext.Provider>
  );
}
