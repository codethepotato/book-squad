import React from "react";
import { useState } from "react";
import HomeCard from './HomeCard'
import TopBanner from './TopBanner'
import Signup from './Signup'
import { Formik, Field, Form, ErrorMessage } from 'formik';


function Home({ programmers, selectedOrders, setSelectedOrders }) {

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

    const programmerList = programmers.map(p => {
        return <HomeCard
            key={p.id}
            name={p.name}
            picture={p.picture}
            specialty={p.specialty}
            selectedOrders={selectedOrders}
            setSelectedOrders={setSelectedOrders} />
    })
    return (
        <div className="Homepage">
            <div>
                <TopBanner />
                <Signup />
                <button onClick={handleOrderButton}>{order ? "back to main menu": "place order"}</button>
                {order ? <div><h2>Place Order</h2>
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
          <button type="submit">confirm order</button>
        </Form>
      </Formik></div>  :<div className="ui stackable four column grid">
                    {programmerList}
                </div>}
            </div>
        </div>
    )
}

export default Home
