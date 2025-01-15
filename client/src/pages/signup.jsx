import { Button, Label, TextInput, Alert, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import './signup.css';
import { set } from 'mongoose';
function Signup() {
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim( )})
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.passwd){
            setErrorMessage('All fields are required')
            return
        }
        try{

          setLoading(true)
          setErrorMessage(null)
            const res = await fetch('/api/auth/signup',{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success == false){
              return setErrorMessage(data.message)
            }
            setLoading(false)
            if(res.ok){
              navigate('/signin')
            }
        } catch(error){
          setErrorMessage(error.message)
          setLoading(false)

        }
    }
  return (
    <div className='flex items-center justify-center mt-20'>
      <form className='flex flex-col gap-4 w-80'onSubmit={handleSubmit}>
        <div>
          <Label value='Username:' />
          <TextInput
            type='text'
            placeholder='Username'
            id='username'
            className='w-64'
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value='E-mail:' />
          <TextInput
            type='text'
            placeholder='Email'
            id='email'
            className='w-64'
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value='Password:' />
          <TextInput
            type='password'
            placeholder='Password'
            id='passwd'
            className='w-64'
            onChange={handleChange}
          />
        </div>
        <Button gradientDuoTone='cyanToBlue' type='submit' disabled={loading}>
          {
            loading ? (
              <>
              <Spinner size='sm' color='white' />
              <span className='pl-3'>Signing up...</span>
              </>
            ) : 'Sign Up'
          }
        </Button>
        <div className='flex gap-2 text-sm'>
        <span>Have an account?</span>
        <Link to = '/signin' className = 'text-blue-500'>
        Sign In
        </Link>
      </div>
      {
        errorMessage && <Alert color='red'>
          {errorMessage}
        </Alert>
      }
      </form>
    </div>
  );
}

export default Signup;