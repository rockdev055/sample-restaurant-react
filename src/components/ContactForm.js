import React from 'react'

const ContactForm = () => (
  <section className="max-width">
    <h1>CONTACT</h1>
    <p>For certain inquiries please use the form below</p>
    <div style={{ width: '550px', margin: '0 auto' }}>
      <form>
        <input
          style={{ width: '100%', height: '50px', borderRadius: '3px', fontSize: '16px' }}
          type="text"
          placeholder="Name*"
        />
        <input
          style={{ width: '100%', height: '50px', borderRadius: '3px', fontSize: '16px' }}
          type="text"
          placeholder="Name*"
        />
        <textarea
          style={{ width: '100%', height: '50px', borderRadius: '3px', fontSize: '16px' }}
          type="textarea"
          placeholder="Name*"
        />
      </form>
    </div>
  </section>
)
export default ContactForm
