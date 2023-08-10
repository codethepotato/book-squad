import React from 'react'
import { Label } from 'semantic-ui-react'

function UserCard({name, id}) {
    return (
        <div>
   
    <Label as='a' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      {name}
    </Label>
    
  </div>
    )
}

export default UserCard