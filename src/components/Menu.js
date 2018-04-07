import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import { Element } from 'react-scroll'
import Appetizers from './Appetizers'
import SoupsSalads from './SoupsSalads'

const Menu = () => (
  <section>
    <Element name="menu" />
    <Router>
      <div className="max-width">
        <h1>MENU</h1>
        <ul className="menu-nav">
          <li>
            <Link to="/">STARTERS</Link>
          </li>
          <li>
            <Link to="/soups-salads">SOUPS | SALADS</Link>
          </li>
          <li>
            <Link to="/entrees">ENTREES</Link>
          </li>
          <li>
            <Link to="/desserts">DESSERTS</Link>
          </li>
          <li>
            <Link to="/beverages">BEVERAGES</Link>
          </li>
        </ul>
        <Route exact path="/" component={Appetizers} />
        <Route exact path="/soups-salads" component={SoupsSalads} />
      </div>
    </Router>
  </section>
)
export default Menu
