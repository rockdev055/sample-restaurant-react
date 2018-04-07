import React from 'react'
import { Element } from 'react-scroll'

const HoursLocation = () => (
  <section style={{ paddingTop: '200px' }}>
    <Element name="hours-location" className="element" />
    <h1 style={{ fontSize: '30px', fontWeight: 200 }}>HOURS & LOCATION</h1>
    <div style={{ display: 'flex', maxWidth: '800px', margin: '0 auto', justifyContent: 'space-between' }}>
      <div style={{ padding: '10px', width: '50%' }}>
        <h2>RESERVATIONS</h2>
        <p>We are able to accommodate parties of 6 or fewer. Reservations can be made using SeatMe. </p>
        <p>Walk ins are encouraged.</p>
        <p>
          To maintain our intimate atmosphere, there are semi-private and private party options for parties of more than
          6. Please contact manager@goodeats.party
        </p>
        <p>For general inquiries contact us at info@goodeats.party</p>
        <button
          style={{
            padding: '15px',
            marginBottom: '35px',
            marginTop: '30px',
            borderRadius: '5px',
            backgroundColor: '#222',
            color: '#eee',
            fontSize: '14px',
            fontWeight: 100,
            textTransform: 'uppercase',
          }}
        >
          Make a Reservation
        </button>
      </div>
      <div style={{ padding: '10px', width: '50%' }}>
        <h2>HOURS</h2>
        <p>Monday thru Saturday: 5pm to 2am</p>
        <p>Sunday: 5pm to 1am</p>
      </div>
    </div>
    <iframe
      width="960"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCkhmj3LI-aYqrlfH3Bu43kAekJPnPU4Vk&q=San+Diego,CA"
      allowFullScreen
    />
  </section>
)

export default HoursLocation
