import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ResetPassword.css'

function ResetPassword() {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        confirmPassword:""
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]:value})
    }

    const handleReset = (event) => {
        event.preventDefault()
        
        if (formData.password == formData.confirmPassword){
            fetch('/resetpassword', {
                method:'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            .then((response) => {
                if (response.ok){
                    response.json()
                }else{
                    window.alert('Response was not ok!')
                }
            })
            .then((data) => {
                window.alert('Password reset successfully')
                navigate('/login')
            })
        } else{
            window.alert('password not matching')
        }
    }

  return (
    <div className='reset'>
        <div className='reset_container'>
            <h1>Reset Password</h1>
            <form onSubmit={handleReset} className='reset_form'>
                <input 
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                />

                <input 
                    name='password'
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                />

                <input 
                    name='confirmPassword'
                    type='password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm Password'
                />
                <button type='submit'>
                    Reset Password
                </button>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword