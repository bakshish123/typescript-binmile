import React, { useContext } from 'react'
import ThemeContextProvider, { ThemeContext } from './ThemeContextProvider'
const Box = () => {
    const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>Theme Content</div>
  )
}

export default Box