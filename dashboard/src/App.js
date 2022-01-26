import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Add from "./Components/Product/Add/Add";
import List from "./Components/Product/List/List";
import Product from "./Components/Product/Product";
import ResigterForm from "./Components/User/ResigterForm/ResigterForm";
import User from "./Components/User/User";
import UserList from "./Components/User/UserList/UserList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/" />}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User />}>
            <Route index element={ <UserList/>} />
            <Route path="form" element={ <ResigterForm/>} />
          </Route>
          <Route path="/product" element={<Product />}>
            <Route index element={ <List/>} />
            <Route path="add" element={ <Add/>} />
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
      <Outlet />
    </>
  );
}

export default App;
