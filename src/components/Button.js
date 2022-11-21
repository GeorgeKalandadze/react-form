import React from 'react'

const Button = ({text,handleClick}) => {
  return (
    <button className='signinup-button' onClick={handleClick}>
        {text}
    </button>
  )
}

export default Button