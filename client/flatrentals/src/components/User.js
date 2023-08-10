import React, {useState, useEffect} from 'react';
import UserCard from './UserCard'

function User() {

    const [users, setUsers] = useState([])

   useEffect(() => {
    fetch('http://localhost:5555/users')
      .then(r => r.json())
      .then(Allusers => setUsers(Allusers))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const userList = users.map(u => {
    return <UserCard 
    key = {u.id}
    name = {u.name} />
  })


    return (
        <div>
            {userList}
        </div>
        
    )
}

export default User