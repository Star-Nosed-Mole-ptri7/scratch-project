import React from 'react';
import Video from './components/video.jsx'
import GoalsComponent from './components/ourGoals.jsx'
import BrandonComponent from './components/brandonChin.jsx'
import AndyComponent from './components/andyKuang.jsx'
import JessicaComponent from './components/jessicaDavila.jsx'
import MarioComponent from './components/marioAlberto.jsx'
import MarkComponent from './components/markAlexander.jsx'
import './components/aboutUs.css'


class About extends React.Component {

  render() {
    return (
      <div>
        <Video />
        <GoalsComponent />
        <div className="TeamContainer">
          <AndyComponent />
          <BrandonComponent />
          <JessicaComponent />
          <MarioComponent />
          <MarkComponent />
        </div>
      </div>
    )
  }
}

export default About;