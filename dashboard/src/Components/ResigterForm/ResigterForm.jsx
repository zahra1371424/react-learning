import React from 'react';
import { useNavigate  } from 'react-router-dom';

export default function ResigterForm(props) {
  const navigate  = useNavigate ();
  const userItem = {}
  const handleChange = (e) => {
    userItem[e.target.name] = e.target.value;
  }
  const submit = () => {
    props.setUserInfo(userInfo => [...userInfo, {firstName:userItem.firstName, lastName: userItem.lastName, email: userItem.email}]);
    navigate('/');
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
