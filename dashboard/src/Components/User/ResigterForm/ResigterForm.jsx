import React from 'react';
import { useNavigate  } from 'react-router-dom';
//import { UserContext } from '../../../contexts/userContext';
import { useStore } from '../../../Store/Store';
import { addUser } from '../../../Store/userInfoReducer';

export default function ResigterForm() {
  const navigate = useNavigate ();
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  // const user = useContext(UserContext);
  const [, dispatch] = useStore();
  const addUserFactory = ({
    firstName,
    lastName,
    email,
  }) => ({
    firstName,
    lastName,
    email,
  });
  // const handleChange = (e) => {
  //   userItem[e.target.name] = e.target.value;
  // }
  const submit = () => {
    dispatch(addUser(addUserFactory(form)));
    // user.setUserInfo(userInfo => [...userInfo, {firstName:userItem.firstName, lastName: userItem.lastName, email: userItem.email}]);
    navigate('/user');
  }
  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value })
  );

  const formStyle = {
    formControl: {
      margin: '16pt',
    },
    input: {
      margin: '0 16pt',
      width: "200px",
    },
    flexRow: {
      display:"flex",
      flexDirection: 'column',
      alignItems: 'center',
    }
  };

  return <>
    <div style={formStyle.flexRow}>
      <label>FistName</label>
      <input
        style={formStyle.input}
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Fist Name"
        onChange={handleInputOnChange}
        value={form.firstName}
        />
    </div>
    <div style={formStyle.flexRow}>
      <label>Last Name</label>
      <input
        style={formStyle.input}
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        onChange={handleInputOnChange}
        value={form.lastName}/>
    </div>
    <div style={formStyle.flexRow}>
      <label>Email</label>
      <input style={formStyle.input}
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        onChange={handleInputOnChange}
        value={form.email}/>
        <br/>
        <button onClick={submit} to="/">Submit</button>
    </div>
    
  </>;
}
