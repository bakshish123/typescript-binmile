//typing of the state hook needs to be done here so that we can provide option between the initial values
import React,{useState} from 'react'

type AuthUser={
    name:string
    email:string
}
const User = () => {
    const [user,setUser] = useState<null | AuthUser>(null) //this is type inference it says that initially its value is null but in future it can be null or authuser type

    const handleLogIn = ()=>{
       setUser({
        name:'Bakshish',
        email:'bakshish10621@gmail.com'
       }) 
    }

    const handleLogOut = ()=>{
      setUser(null) 
    }
  return (
    <div>
        <button onClick={handleLogIn}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <div>User name is{user?.name}</div>
        <div>User email is{user?.email}</div>
    </div>
  )
}

export default User