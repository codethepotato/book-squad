import React from 'react'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreateOrder() {

    const [order, setOrder] = useState(false)

    const handleOrderButton = () => {
        setOrder(!order)
    }

    const validate = (values) => {
        const errors = {};
    
        if (!values.cost) {
            errors.cost = 'Cost is required';
        } else if (isNaN(values.cost)) {
            errors.cost = 'Cost must be a number';
        }
    
        if (!values.user_id) {
            errors.user_id = 'User ID is required';
        } else if (isNaN(values.user_id)) {
            errors.user_id = 'User ID must be a number';
        }
    
        if (!values.programmer_id) {
            errors.programmer_id = 'Programmer ID is required';
        } else if (isNaN(values.programmer_id)) {
            errors.programmer_id = 'Programmer ID must be a number';
        }
    
        return errors;
    };
    
    const initialValues = {
        cost: "",
        user_id: "",
        programmer_id: ""
    }
    const handleSubmit = async (values) => {
        try {
            const response = await fetch('http://localhost:5555/orders', {
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
        <button class="button" onClick={handleOrderButton}>
            {order ? 'Back to main menu' : 'Place Order'}
        </button>
        {order ? (
            <div>
                <h2>Place Order</h2>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
                    <Form>
                        <div>
                            <label>Cost</label>
                            <Field type="number" name="cost" />
                            <ErrorMessage name="cost" component="div" />
                        </div>
                        <div>
                            <label>Your Member Id</label>
                            <Field type="number" name="user_id" />
                            <ErrorMessage name="U_id" component="div" />
                        </div>
                        <div>
                            <label>Id Number of Desired Programmer</label>
                            <Field type="number" name="programmer_id" />
                            <ErrorMessage name="ProId" component="div" />
                        </div>
                        <button type="submit">Confirm Order</button>
                    </Form>
                </Formik>
            </div>
        ) : null}
    </div>
    )
}

export default CreateOrder