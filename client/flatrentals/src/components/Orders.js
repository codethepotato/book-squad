import React, { useEffect, useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import OrderCard from './OrderCard'
import EditForm from './EditForm'

function Orders() {

  const [orders, setOrders] = useState([])
  const [editingOrder, setEditingOrder] = useState(null)


  useEffect(() => {
    fetch('http://localhost:5555/orders')
      .then(r => r.json())
      .then(allOrders => setOrders(allOrders))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  const handleDelete = (deletedOrderId) => {
    const updatedOrders = orders.filter((order) => order.id !== deletedOrderId);
    setOrders(updatedOrders);
  };

  const handleEdit = (orderId) => {
    setEditingOrder(orderId)
  }

  const handleEditFormClose = () => {
    setEditingOrder(null)
  }



  const orderList = orders.map(o => {
    return <OrderCard
      key={o.id}
      id={o.id}
      cost={o.cost}
      programmer={o.programmer.name}
      specialty={o.programmer.specialty} 
      handleDelete = {handleDelete}
      onEdit={handleEdit}
      />
  })

  
  return (
    <div>
      <h2>Your Order</h2>
      {orderList}
      {editingOrder && <EditForm orderId={editingOrder} onClose={handleEditFormClose}/>}
    </div>
  )
}

export default Orders