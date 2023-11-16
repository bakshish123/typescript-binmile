import React from 'react'

export type ProfileProps ={
    name:string
}
const Profile = ({name}:ProfileProps) => {
  return (
    <div>Private profile component .name is{name}</div>
  )
}

export default Profile