import React, { useEffect, useState } from 'react';
import {Link, Outlet} from "react-router-dom";
import { UserProvider } from '../Provider/UserProvider';
export default function User() {
  const [userInfo, setUserInfo] = useState([])
  //setUserInfo={setUserInfo}
  return <>
    <UserProvider>
      <ul>
        <li>
          <Link to="/">User List</Link>
        </li>
        <li>
          <Link to="/user/form">Form</Link>
        </li>
      </ul>
      <hr />
      <Outlet/>
    </UserProvider>
  </>;
}
