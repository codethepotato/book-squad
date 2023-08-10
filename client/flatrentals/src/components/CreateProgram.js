import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreateProgrammer() {
    const initialValues = {
        name: '',
        specialty: '',
        picture: ''
    }

    const validate = (values) => {
        const errors = {};
    
        if (!values.name) {
            errors.name = 'Name is required';
        }
    
        if (!values.specialty) {
            errors.specialty = 'Specialty is required';
        }
    
        return errors;
    };
    const handleSubmit = async (values) => {
        try {
            const response = await fetch('http://localhost:5555/programmers/', {
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
        <h2>Create Programmer</h2>
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label>Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <label>Specialty</label>
                    <Field type="text" name="specialty" />
                    <ErrorMessage name="specialty" component="div" />
                </div>
                <div>
                    <label>Picture</label>
                    <Field type="text" name="picture" />
                    <ErrorMessage name="picture" component="div" />
                </div>
                <button type="submit">Create</button>
            </Form>
        </Formik>
    </div>
    )
}

export default CreateProgrammer