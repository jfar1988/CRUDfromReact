import React from 'react'
import './styles/delete.css'

const DeleteUser = ({setConfirmDelet,user,deleteUserById}) => {

    const handleAcept = () =>{
        setConfirmDelet(true)
        deleteUserById(user.id)
    }
  return (
    <div className='boxDel'>
        <h2 className='boxDel__title'>Delete User</h2>
        <p className='boxDel_p'>The user {user.first_name} {user.last_name} has been deleted</p>
        <button className='boxDel__btn' onClick={handleAcept}>Acept</button>      
    </div>
  )
}

export default DeleteUser
