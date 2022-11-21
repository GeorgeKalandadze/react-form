import React from 'react'

const Input = ({placeHolder,value, changeValue}) => {
  
  return (
    <input type="text" value={value} className='signinup-input' placeholder={placeHolder} onChange={changeValue}/>
  )
}

export default Input