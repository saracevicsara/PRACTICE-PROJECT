import "./AddUser.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={"input"}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserInput</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button className="button" type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};
export default AddUser;
