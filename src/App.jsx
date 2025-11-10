import React from "react";
import { Route, Routes } from "react-router-dom";
import CardNav from "./component/CardNav";
import CardBody from "./component/CardBody";
import Home from "./Pages/Home";
import Longin from "./Pages/Longin";
import Register from "./Pages/Register";
import UsersList from "./Pages/UsersList";
import ViewUsers from "./Pages/ViewUsers";
import UpdateUsers from "./Pages/UpdateUsers";

function App() {
  return (
    <div>
      <CardNav />
      <Routes>
  <Route path="/" element={<CardBody/>} />
  <Route path="/login" element={<Longin />} />
  <Route path="/register" element={<Register />} />
  <Route path="/userslist" element={<UsersList />} />
  <Route path="/viewusers/:id" element={<ViewUsers />} />
  <Route path="/updateusers/:id" element={<UpdateUsers />} />
</Routes>

    </div>
  );
}

export default App;
