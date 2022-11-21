import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import {useNavigate} from "react-router-dom"
import axios from 'axios'


const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const fullData = {
    name:name,
    email:email,
    password:password,
    passwordConfirmation:passwordConfirmation
  }

  useEffect(()=>{
    
  },[])
  const sendData = async () => {
    try{
      const request = await axios.post("http://localhost:8080/http/register.php",JSON.stringify(fullData) , {
        headers: {
          'Content-Type': 'application/json' 
        }
        
      });
      return request
    }catch (error){
      console.log("ვერ მოხდა მონაცემების გაგზავნა")
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(fullData)
    sendData()
    
    
  }

  
  return (
    <>
    <Form>
        <h1>Sign Up</h1>
        <Input  value={name} name="name" placeHolder={"Name"} changeValue={(e) => setName(e.target.value)}/>
        <Input value={email} name="email"  placeHolder={"Gmail"} changeValue={(e) => setEmail(e.target.value)}/>
        <Input value={password} name="password" placeHolder={"Password"} changeValue={(e) => setPassword(e.target.value)}/>
        <Input  value={passwordConfirmation} name="passwordConfirmation" placeHolder={"Repeat password"} changeValue={(e) => setPasswordConfirmation(e.target.value)}/>
        <Button text={"Create an account"} handleClick={handleClick}/>
        <p onClick={() => navigate(-1)}  className='form-type-text'>Already have an account? <span style={{color:"#FC4747"}}>Login</span></p>
    </Form>
    </>
  )
}

export default SignUp