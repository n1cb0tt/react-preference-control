import React from "react";




const Home = (props) => {
  console.log(props);
  return (<>
    <h1>Page d'accueil</h1>
  <p>Utilisateur : {props.selectedUser!==""?props.users[props.selectedUser].name:"-"}</p>
  </>
  )
}



export default Home;