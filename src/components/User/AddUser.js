import "./AddUser.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useRef, useState } from "react";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    console.log(enteredName, enteredAge);
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={"input"}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserInput</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button className="button" type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
