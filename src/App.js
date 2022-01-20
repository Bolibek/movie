import React from 'react';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import './App.css';


export default function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}