import React, {useContext} from 'react';
import { useNavigate  } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext';

export default function ResigterForm() {
  const navigate  = useNavigate ();
  const userItem = {};
  const user = useContext(UserContext);
  const handleChange = (e) => {
    userItem[e.target.name] = e.target.value;
  }
  const submit = () => {
    user.setUserInfo(userInfo => [...userInfo, {firstName:userItem.firstName, lastName: userItem.lastName, email: userItem.email}]);
    navigate('/user');
  }
  return <>
   <div style={{display:"flex", flexDirection: 'column', width: "200px"}}>
     <label>FistName</label>
     <input
      type="text" 
      placeholder="Fist Name"
      name="firstName"
      onChange={handleChange}/>
   </div>
   <div style={{display:"flex", flexDirection: 'column', width: "200px"}}>
     <label>Last Name</label>
     <input
      type="text" 
      placeholder="Last Name"
      name="lastName"
      onChange={handleChange}/>
   </div>
   <div style={{display:"flex", flexDirection: 'column', width: "200px"}}>
     <label>Email</label>
     <input type="email" name="email"
      onChange={handleChange}/>
   </div>
   <button onClick={submit} to="/">Submit</button>
  </>;
}
