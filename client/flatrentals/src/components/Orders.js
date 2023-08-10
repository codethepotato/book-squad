import React, {useEffect, useState} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import OrderCard from './OrderCard'

function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5555/orders')
          .then(r => r.json())
          .then(allOrders => setOrders(allOrders))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

      const orderList = orders.map( o => {
        return <OrderCard 
        key={o.id}
        cost={o.cost}
        programmer={o.programmer.name}
        specialty={o.programmer.specialty}/>
      })
    
    return (
        <div>
            <h2>Your Order</h2>
            {orderList}
        </div>
    )
}

export default Orders