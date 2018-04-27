import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  return (
    <header className="App-header">
      <div className="Nav-wrapper">
        <h1 id="logo">Good Eats</h1>
        <nav>
          <ul id="list">
            <li>
              <ScrollLink href="" to="hours-location" spy={true} smooth={true} duration={1000}>
                HOURS AND LOCATION
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="" to="menu" spy={true} smooth={true} duration={1000}>
                MENU
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="" to="contact" spy={true} smooth={true} duration={1000}>
                <a>CONTACT</a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink href="" to="reservations" spy={true} smooth={true} duration={1000}>
                <a>RESERVATIONS</a>
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
