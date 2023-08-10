import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Signup() {
    const initialValues = {
        name: '',
    }

    const validate = (values) => {
        const errors = {};
        
        if (!values.name) {
            errors.name = 'Name is required';
        } else if (typeof values.name !== 'string') {
            errors.name = 'Name must be a string';
        } else if (values.name.length > 20) {
            errors.name = 'Name must be 20 characters or less';
        }
    
        return errors;
    };
    
    const handleSubmit = async (values) => {
        try {
            const response = await fetch('http://localhost:5555/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                console.log('User registered successfully')
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.log('Registration failed:', error)
        }
    }
    return (
    <div>
      <h2>Signup</h2>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
    )
}
    
export default Signup