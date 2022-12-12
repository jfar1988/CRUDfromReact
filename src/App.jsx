import { useState, useEffect } from "react";
import "./App.css";
import DeleteUser from "./componets/DeleteUser";
import FormUser from "./componets/FormUser";
import UserCard from "./componets/UserCard";
import useCrud from "./hooks/useCrud";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const { users, createNewUser, updateUserById, deleteUserById, getAllUsers } =
    useCrud();
  const [closeForm, setCloseForm] = useState(true);
  const [confirmDelet, setConfirmDelet] = useState(true);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div className="App__header">
        <h1>Users</h1>
        <button onClick={() => setCloseForm(false)} className="App__btn">
          <i className="fa-solid fa-plus"></i> Create New User
        </button>
      </div>
      <div className={`form-container ${closeForm && "close__form"}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className="user-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
            setConfirmDelet={setConfirmDelet}
          />
        ))}
      </div>
      <div className={`form-container ${confirmDelet && "close__form"}`}>
        {users?.map((user) => (
          <DeleteUser
            setConfirmDelet={setConfirmDelet}
            confirmDelet={confirmDelet}
            deleteUserById={deleteUserById}
            user={user}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
