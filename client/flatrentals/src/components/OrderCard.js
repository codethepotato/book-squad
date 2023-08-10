import React, {useState, useEffect} from 'react';
import { Card } from 'semantic-ui-react'

function OrderCard({cost, programmer, specialty}) {
    const items = [
        {
          header: `Programmer: ${programmer}`,
          description:
            `Specialty: ${specialty}`,
          meta: `Cost: ${cost}`,
        },
      ]
    
      return <Card.Group items={items} />;
}


  export default OrderCard

