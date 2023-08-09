import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const items = [
  { key: 'home', active: true, name: 'Home', path: '/' },
  { key: 'programmers', name: 'Programmers', path: '/programmers' },
  { key: 'orders', name: 'Orders', path: '/orders' },
]

const Navigation = () => (
  <Menu items={items} as="ul">
    {items.map((item) => (
      <Menu.Item key={item.key} as="li">
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default Navigation