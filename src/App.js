import React, { useState, Fragment } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((preUserLiset) => {
      return [
        ...preUserLiset,
        { id: Math.random().toString, name: uName, age: uAge },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
};

export default App;
