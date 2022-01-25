import React from 'react';
import {Link} from "react-router-dom";
export default function User() {
  return <>
    <ul>
      <li>
        <Link to="/">User List</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
    </ul>
    <hr />
  </>;
}
