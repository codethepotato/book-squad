import React from 'react'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreateOrder() {

    const [order, setOrder] = useState(false)

    const handleOrderButton = () => {
        setOrder(!order)
    }

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
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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