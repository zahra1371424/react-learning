import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Product() {
  return <>
      <ul>
      <li>
        <Link to="/product">Product List</Link>
      </li>
      <li>
        <Link to="/product/add">Add Product</Link>
      </li>
    </ul>
    <hr />
    <Outlet/>
  </>;
}
