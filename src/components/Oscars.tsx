import React from 'react'
type OscarProps ={
    children:React.ReactNode
}
const Oscars = (props:OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Oscars