import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import FormUser from './componets/FormUser'
import UserCard from './componets/UserCard'

function App() {

  const [users, setUsers] = useState()
  const getAllUsers = () => {
    const URL = 'https://users-crud.academlo.tech/users/'
    axios.get(URL)
    .then(res => setUsers(res.data))
    .cath(err => console.log(err))
  }
  useEffect(() => {
    getAllUsers
  }, [])

  const createNewUser = data => {
    const URL = 'https://users-crud.academlo.tech/users/'
    axios.post(URL, data)
    .then( () => getAllUsers())
    .cath(err => console.log(err))

  }

    

  return (
    <div className="App">
      <h1>Users</h1>
      <button>Open Form</button>
      <FormUser
      createNewUser={createNewUser}
      />
      <div className="user-container">
        {
          users?.map( user => 
            (
              <UserCard
              key={user.id}
              user={user}
              />            
            )
          )
        }
      </div>
    </div>
  )
}

export default App
