import styled from "styled-components";
import React, { useState, useEffect } from "react";
import SelectUser from "../components/SelectUser";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import { _getUsers } from "../data/data.js";
import { _getQuestions } from "../data/data.js";



import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


// const MainWrapper = styled.body`
const MainWrapper = styled.div`
  grid-area: main;
  background-color: #BBBBBB;
`;

function Main() {
  const [selectedUser, setSelectedUser] = useState("");

  const handleChangeSelectedUser = (e) => { setSelectedUser(e.target.value) };

  const [users, setUsers] = useState({});
  const [questions, setQuestions] = useState({});



  useEffect(() => {
    _getUsers().then((res) => {setUsers(res); console.log('res :', res); console.log(Object.keys(res));});
    _getQuestions().then((res) => {setQuestions(res); console.log('res :', res); console.log(Object.keys(res));});
  }, []);


  return (
    <div>
      <MainWrapper>
        <Switch>
          <Route exact path="/"><SelectUser users={users} selectedUser={selectedUser} handleChangeSelectedUser={handleChangeSelectedUser} /> </Route>
          <Route path="/home"><Home users={users} selectedUser={selectedUser} /></Route>
          <Route path="/leaderboard"><Leaderboard users={users} selectedUser={selectedUser} questions={questions}  /></Route>

        </Switch>
      </MainWrapper>
    </div>
  );
}

export default Main;