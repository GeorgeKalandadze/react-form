import React from 'react'

const Form = (prop) => {
  return (
    <div className='form'>
        <form >
            {prop.children}
        </form>
    </div>
  )
}

export default Form