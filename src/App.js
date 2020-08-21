import React from 'react';
import './App.css';

import GridLayout from "./layout/GridLayout";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Nav from "./layout/Nav";
import Header from "./layout/Header";



function App() {
  return (
    <GridLayout>
      <Header />
      <Nav />
      <Main >
      </Main>
      <Footer />
    </GridLayout>
  );
}

export default App;
