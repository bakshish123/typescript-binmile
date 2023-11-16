import React,{useContext} from 'react'
import { UserContextProvider } from './UserContext'



const User = () => {
    const UserContext=useContext(UserContextProvider)
    const handleLogIn=()=>{
        UserContext.setUser({
          name:'Bakshish', 
          email:'xyz@gmail' 
        })
    }
    const handleLogOut = ()=>{
        UserContext.setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <div>User name is{}</div>
        <div>User email is{}</div>
    </div>
  )
}

export default User