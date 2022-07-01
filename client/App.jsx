import React from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx'


class App extends React.Component {

  render() {
    return (
    <>
      <Navbar />
      {/* <Main /> */}
    </>
    );
  }
}

export default App;