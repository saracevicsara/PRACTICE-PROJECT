import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

const App = () => {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
};
export default App;
