import React from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import {useNavigate} from "react-router-dom"


const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
        <Form>
            <h1>Login</h1>
            <Input placeHolder={"Gmail"}/>
            <Input placeHolder={"Password"}/>
            <Button text={"Login to your account"}/>
            <p onClick={() => navigate('/registration')} className='form-type-text'>Don’t have an account? <span style={{color:"#FC4747"}}>Sign Up</span></p>
        </Form>
    </>
  )
}

export default SignIn