import React , { useEffect, useState }from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ResigterForm from "./Components/ResigterForm/ResigterForm";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";

function App() {
  const [userInfo, setUserInfo] = useState([])

  return (
    <Router>
      <Routes>
        <Route path="user" element={<User />}>
          <Route path="list"  element={ <UserList userInfo = {userInfo}/>} />
          <Route path="form" element={ <ResigterForm userInfo={userInfo} setUserInfo={setUserInfo}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
