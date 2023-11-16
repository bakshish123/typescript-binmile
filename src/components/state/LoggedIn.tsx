//no typing of the state hook required as initial value that has been set creates no problrm
import React,{useState} from 'react'

const LoggedIn = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const handleLogIn = ()=>{
        setIsLoggedIn(true)
    }

    const handleLogOut = ()=>{
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <div>User is {isLoggedIn?'logged in':'logged out'}</div>
    </div>
  )
}

export default LoggedIn