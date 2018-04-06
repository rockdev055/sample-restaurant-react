import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import FaBeer from 'react-icons/lib/fa/angle-double-down'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <div className="max-width">
            <p>Good Eats is a restaurant located at</p>
            <p>543 Main St, San Diego</p>
            <p style={{ fontSize: '45px', margin: 0, marginTop: '-20px' }}>
              <a style={{ color: 'black' }} href="#">
                <FaBeer />
              </a>
            </p>
          </div>
        </section>
        <section style={{ paddingTop: '200px' }}>
          <div className="max-width">
            <h1 style={{ fontSize: '24px', fontWeight: 200 }}>HOURS & LOCATION</h1>
          </div>
        </section>
      </div>
    )
  }
}

export default App
