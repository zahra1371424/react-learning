import React from 'react';
//import { UserContext } from '../../../contexts/userContext';
import { useStore } from '../../../Store/Store';

export default function UserList() {
  //const user = useContext(UserContext);
  const [state] = useStore();
  const { userInfo } = state;
  return <> 
    {userInfo && userInfo.length ?
      userInfo.map((item, index) => (
        <>
        <div key={index}>
          <span>{index + 1}: </span> 
          <div style={{display: 'flex'}}>
            <label>Name :</label>
            <span>{item?.firstName} {item?.lastName}</span>
          </div>
          <div style={{display: 'flex'}}>
            <label>Email :</label>
            <span> <i key={index}>{item?.email}</i></span>
          </div>
          <br/>
        </div>
        </>
      ))
      : <> <h1>Please go to form page and add User</h1></>
    }
  </>;
}
