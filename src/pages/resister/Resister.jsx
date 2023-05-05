import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Resister = () => {
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const {createUser}=useContext(AuthContext);
    const handleResister=event=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        
      

        createUser(email, password)
        .then(result=>{
            const createdUser= result.user;
            console.log(createdUser);
        })
        .catch(error=>{
            setError(error.message);
        })
        
        
            if(password.length<6){
                setError('Put six char') 
                setSuccess('')    
        }
       
        else{
            setSuccess('Logged in successfully')
            setError('')
        }
    }

    

    return (
        <Container className='mx-auto,mt-5 w-25'>
            <h2 className='text-success text-center'>Please Resister</h2>
             <Form onSubmit={handleResister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Enter name" required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Your Photo</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Photo url" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'   placeholder="Password" required/>
      </Form.Group>
     
      {error ? <Form.Text className="text-danger">
          {error}
        </Form.Text>
    : <Form.Text className="text-success">
    {success}
    </Form.Text>     
    } <br />
      <Button className='mt-3' variant="primary" type="submit">
        Submit
      </Button> <br />

      <Form.Text >
            Already have an account? please <Link to='/login'> login</Link>
        </Form.Text>
      
      
    </Form>
        </Container>
    );
};

export default Resister;