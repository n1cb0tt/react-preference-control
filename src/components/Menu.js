// import styled from "styled-components";
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';


// const Header = styled.header`
//   grid-area: head;
//   background-color: #AAAAAA;
// `;

function Menu() {




  return (
    <div>
      <nav>
        <div>
          <span><Link to="/">Select user</Link></span><span> | </span>
          <span><Link to="/home">Home</Link></span><span> | </span>
          <span><Link to="/leaderboard">Leaderboard</Link></span><span> | </span>


        </div>
      </nav>

    </div>
  )
}



export default Menu;