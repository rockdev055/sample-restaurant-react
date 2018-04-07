import React, { Component } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import HoursLocation from './components/HoursLocation'
import Menu from './components/Menu'
import { Link as ScrollLink, Element } from 'react-scroll'
import './App.css'
import FaArrow from 'react-icons/lib/fa/angle-double-down'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Element name="top" />
        <Header />
        <Intro />
        <HoursLocation />
        <Menu />
        <p>
          <ScrollLink style={{ color: 'black' }} to="top" href="" spy={true} smooth={true} offset={50} duration={1000}>
            Back to top
          </ScrollLink>
        </p>
      </div>
    )
  }
}

export default App
