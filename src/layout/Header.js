import styled from "styled-components";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import Menu from "../components/Menu";

const HeaderWrapper = styled.header`
  grid-area: head;
  background-color: #AAAAAA;
`;

function Header() {
  return(
    <HeaderWrapper>
      <Menu />
    </HeaderWrapper>
  )
}

export default Header;