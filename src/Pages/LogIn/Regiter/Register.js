import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { registerWithEmail, updateUserinfo, emailVerification } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const handleToCheck = (event) => {
        setAccepted(event.target.checked)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        registerWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                handlerUpdateUserInfo(name, photoURL);
                handleEmailVerification();
                toast.success('Please check spam to verify your email')
            })
            .catch(error => {
                setError(error.message);
                console.log(error)
            })

    }
    const handlerUpdateUserInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateUserinfo(profile)
            .then(() => { })
            .catch((error) => { console.log(error) })
    }
    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .then(error => console.error(error))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>UerName</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your UserName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter Your Photo Url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter Your Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleToCheck}
                        label={<>Accept <Link to='/terms'>term and conditions</Link> </>} />
                </Form.Group>
                <Button variant="primary" disabled={(!accepted)} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;