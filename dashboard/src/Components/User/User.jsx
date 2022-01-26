import React from 'react';
import {Link, Outlet} from "react-router-dom";
//import { UserProvider } from '../Provider/UserProvider';
import { StoreProvider } from '../../Store/Store';
import { initialState, addUserReducer } from '../../Store/userInfoReducer';

export default function User() {
  //const [userInfo, setUserInfo] = useState([])
  //setUserInfo={setUserInfo}
  return <>
  <StoreProvider initialState={initialState} reducer={addUserReducer}>
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
  </StoreProvider>
  </>;
}
