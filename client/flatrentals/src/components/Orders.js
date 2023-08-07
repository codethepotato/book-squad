import React, {useEffect} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

function Orders({ selectedOrders }) {

        const orderList = selectedOrders.map((order, index) => (
            <div key={index} className="column">
                <Card>
                    <Image src={order.picture} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{order.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            {order.specialty}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            Order
                        </a>
                    </Card.Content>
                </Card>
            </div>
        ))

        useEffect(() => {
            console.log('Selected orders updated', selectedOrders)
        }, [selectedOrders])

    return (
        <div>
            <h2>Your Order</h2>
            {orderList}
        </div>
    )
}

export default Orders