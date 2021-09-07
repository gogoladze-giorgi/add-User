import React, { useState } from "react";
import Card from "../UI/Card";
import Classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const UserNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandler = (event) => {
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    event.preventDefault();
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  return (
    <div>
      {/* <ErrorModal title="an error ocured" message="Something went wrong" /> */}
      <Card ClassName={Classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={UserNameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
