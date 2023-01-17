import "./AddUser.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState } from "react";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={"input"}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserInput</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button className="button" type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};
export default AddUser;
