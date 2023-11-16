import React from 'react'
type InputProps = {
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
const Input = (props:InputProps) => {
  return (
    <div>
        <h2>
            <input type='text' value={props.value} onChange={props.handleChange}></input>
        </h2>
    </div>
  )
}

export default Input