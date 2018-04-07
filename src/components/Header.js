import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  return (
    <header className="App-header">
      <div className="Nav-wrapper">
        <nav>
          <h1 id="logo">Good Eats</h1>
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
              <a>CONTACT</a>
            </li>
            <li>
              <a>BUZZ</a>
            </li>
            <li>
              <a>GIFTCARDS</a>
            </li>
            <li>
              <a>RESERVATIONS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
