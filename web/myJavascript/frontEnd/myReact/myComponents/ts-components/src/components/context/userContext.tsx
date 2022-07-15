import * as React from 'react';
import { UserContext } from './userContextProvider'

export function UserContextUser () {

  const userContext = React.useContext(UserContext)

    const handleLogin = () => {
      if (userContext) { 
        userContext.setUser({
          name: "jake",
          email: "jake@gmail.com"
        })
      }
    }
    const handleLogout = () => {
      if (userContext) { 
        userContext.setUser(null)
      }
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>user name is : {userContext.user?.name} </p>
      <p>user email is : {userContext.user?.email} </p>
    </div>
  );
}
