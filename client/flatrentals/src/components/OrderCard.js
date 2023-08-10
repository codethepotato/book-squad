import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react'

function OrderCard({ cost, programmer, specialty, id, onEdit}) {

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5555/orders/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      if (response.ok) {
        handleDelete(id)
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.log('Registration failed:', error)
    }
  }


  return (
    <Card>
      <Card.Content>
        <Card.Header>{programmer}</Card.Header>
        <Card.Description>{specialty}</Card.Description>
        <Card.Meta>{`Cost: ${cost}`}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={handleDelete} color="red">
          Delete
        </Button>
        <Button onClick={() => onEdit(id)} color="blue">
            Edit
        </Button> 
      </Card.Content>
    </Card>
  )
}


export default OrderCard

