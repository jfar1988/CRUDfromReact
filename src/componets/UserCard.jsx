import React from "react";
import "./styles/userCard.css";

const UserCard = ({ user, setUpdateInfo,setCloseForm,setConfirmDelet,confirmDelet }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
    setCloseForm(false)

  };
  const handleDelete = () =>{
    setConfirmDelet(false)
  }

  return (
    <article className="card">
      <h3 className="card__tittle">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="card__body">
        <li className="card__item">
          <span className="card__span">E-mail </span>
          {user.email}
        </li>
        <li className="card__item">
          <span className="card__span">Birthday </span>
          {user.birthday}
        </li>
      </ul>
      <footer className="card__footer">
        <button className="card__btn card__btn__trash" onClick={handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="card__btn card__btn__edit" onClick={handleEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
