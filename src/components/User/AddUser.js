import "./AddUser.css";
import Card from "../UI/Card";
const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserInput</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <button className="button" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};
export default AddUser;
