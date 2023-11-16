import React,{useRef,useEffect} from 'react'

const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[])
  return (
    <div>
        <input ref={inputRef} type='text'></input>
    </div>
  )
}

export default DomRef