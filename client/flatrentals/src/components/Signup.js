import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

function Signup() {
    const initialValues = {
        name: '',
    }
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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