import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  return <>
      <ul>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
    </ul>
    <hr />
    <Outlet/>
  </>;
}
