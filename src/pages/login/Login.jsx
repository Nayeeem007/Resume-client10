import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';


const Login = () => {

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin=()=>{

        signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    console.log(user);
   
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  
    }

    const handleGithubLogin=()=>{
        signInWithPopup(auth, githubProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        }).catch((error) => {
          const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        
        const email=form.email.value;
        const password=form.password.value;
        signIn(email, password)
        .then(result=>{
            const signInnedUser=result.user;
            console.log(signInnedUser);
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <Container className='mx-auto,mt-5 w-25'>
            <h2 className='text-success text-center'>Please Resister</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Login
                </Button> <br />

                <Form.Text >
                    Don't have an account? please <Link to='/resister'> Resister</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <Button onClick={handleGoogleLogin} className='my-3' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <br />
            <Button onClick={handleGithubLogin} variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
        </Container>
    );
};

export default Login;