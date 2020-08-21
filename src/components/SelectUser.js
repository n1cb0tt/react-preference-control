import React from "react";


const SelectUser = (props) => {




  return (
    <>
      <h1>Select user</h1>
      <select onChange={props.handleChangeSelectedUser}>
        <option value="">choisissez un utilsateur</option>
        {Object.keys(props.users).map((key) => <option key={props.users[key].id} value={props.users[key].id} >{props.users[key].name}</option>)}
      </select>
      <p>Utilisateur sélectionné : {props.selectedUser !== "" ? props.users[props.selectedUser].name : ""}</p>
    </>
  )
}

export default SelectUser;