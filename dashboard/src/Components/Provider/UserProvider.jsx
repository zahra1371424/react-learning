import { UserContext } from "../../contexts/userContext";
import React, { useEffect, useState } from 'react';

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

const withUser = (Child) => (props) => (
  <UserContext.Consumer>
    {(context) => <Child {...props} {...context} />}
    {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
  </UserContext.Consumer>
);

export { UserProvider, withUser };