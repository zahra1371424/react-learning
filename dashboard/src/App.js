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
    <div className="App">
      <Router>
      <div>
        <User/> 
        <Routes>
          <Route path="/" element={ <UserList userInfo = {userInfo}/>}></Route>
          <Route path="/form" element={ <ResigterForm userInfo={userInfo} setUserInfo={setUserInfo}/>}></Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
