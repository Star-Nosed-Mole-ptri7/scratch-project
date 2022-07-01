import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './pages/homePage/home.jsx';
import About from './pages/aboutPage/about.jsx';
import Articles from './pages/articlesPage/articles.jsx';
import Education from './pages/educationPage/education.jsx';
import FAQs from './pages/FAQsPage/FAQs.jsx';
import Item from './pages/itemPage/item.jsx';
import Login from './pages/loginPage/login.jsx';
import SignUp from './pages/signUpPage/signUp.jsx';
import Volunteer from './pages/volunteerPage/volunteer.jsx';



class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar/>
        <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/articles" element={<Articles />} />
          <Route path="/education" element={<Education />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        </main>
      </Router>

    );
  }
}

export default App;