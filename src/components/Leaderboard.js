import React from "react";


const Leaderboard = (props) => {


    console.log(props.questions)

    return (
        <>
            <h1>Leaderboard</h1>
            <p>{props.users[props.selectedUser].name}</p>
            <p>{Object.keys(props.users).length} utilisateur(s)</p>
            <p>Utilisateur : {props.selectedUser !== "" ? props.users[props.selectedUser].name : "-"}</p>
            {Object.values(props.users).sort((a,b)=> Object.keys(b.answers).length-Object.keys(a.answers).length).map((user,i) =>
                <div key={user.id}>
                    <img src={user.avatarURL} alt={user.name} />
                    {i+1} {user.name} {Object.keys(user.answers).length} / {Object.keys(props.questions).length} ({Math.floor(Object.keys(user.answers).length / Object.keys(props.questions).length * 10000) / 100} %) <progress value={Object.keys(user.answers).length / Object.keys(props.questions).length} max="1"></progress></div>)
      }

        </>
    )
}

export default Leaderboard;