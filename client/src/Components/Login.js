import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login({setCustomer}) {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]: value})
    }

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()

        fetch('/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((response) => {
            if (response.ok){
                return response.json()
            }else{
                window.alert('Response Error')
            }
        })
        .then((data) => {
            if (data){
                setCustomer(data)
                navigate('/')
            } else{
                window.alert("Wrong credential")
            }
        })
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-heading'>Welcome Back !</h1>
            <form className='login-form' onSubmit={handleLogin}>
                <h2>Login</h2>
                <input 
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />

                <div className='forgotpassword'>
                    <Link to='/resetpassword'>Forgot password ?</Link>
                </div>

                <button className='login_button' type='submit'>
                    Sign in
                </button>

                <div className='to_register'>
                    <p>Don't have an account ?</p>
                    <Link to='/register'>Register Now</Link>
                </div>
            


                
            </form>
            <div className='image'>
                <img src='https://img.freepik.com/free-vector/people-shopping-with-bags_24908-56764.jpg?size=626&ext=jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Login