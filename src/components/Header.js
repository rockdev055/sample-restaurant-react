import React from 'react'

const Header = () => {
  return (
    <header className="App-header">
      <div className="Nav-wrapper">
        <nav>
          <h1 id="logo">Good Eats</h1>
          <ul id="list">
            <li>
              <a>HOURS AND LOCATION</a>
            </li>
            <li>
              <a>MENU</a>
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
