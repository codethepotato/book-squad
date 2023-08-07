import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


function HomeCard({name, specialty, picture,}) {
    return(
        <div className="column">
       <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {specialty}
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
    )
}

export default HomeCard