import React from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import FaArrow from 'react-icons/lib/fa/angle-double-down'

const Intro = () => {
  return (
    <section>
      <div className="max-width">
        <p>Good Eats is a restaurant located at</p>
        <p>543 Main St, San Diego</p>
        <p style={{ fontSize: '45px', margin: 0, marginTop: '-20px' }}>
          <ScrollLink
            href=""
            to="hours-location"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            style={{ color: 'black' }}
            id="arrow"
          >
            <FaArrow />
          </ScrollLink>
        </p>
      </div>
    </section>
  )
}

export default Intro
