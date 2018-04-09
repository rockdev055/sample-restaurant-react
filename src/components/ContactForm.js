import React, { Component } from 'react'
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'

class ContactForm extends Component {
  state = {
    submitted: false,
  }

  submit = () => this.setState({ submitted: true })
  openForm = e => {
    e.preventDefault()
    this.setState({ submitted: false })
  }
  render() {
    if (this.state.submitted) {
      return (
        <div>
          <h1>Thank you for your submission!</h1>
          <a style={{ color: 'black' }} onClick={this.openForm} href="">
            Send another message
          </a>
        </div>
      )
    }
    return (
      <section className="max-width">
        <Element name="contact" />
        <h1>CONTACT</h1>
        <p>For certain inquiries please use the form below</p>
        <div style={{ width: '550px', margin: '0 auto' }}>
          <form onSubmit={this.submit}>
            <input
              style={{ width: '100%', height: '50px', borderRadius: '3px', fontSize: '16px', marginBottom: '20px' }}
              type="text"
              placeholder="Name*"
            />
            <input
              style={{ width: '100%', height: '50px', borderRadius: '3px', fontSize: '16px', marginBottom: '20px' }}
              type="text"
              placeholder="Email*"
            />
            <select
              style={{
                width: '100%',
                height: '50px',
                borderRadius: '3px',
                fontSize: '16px',
                marginBottom: '20px',
              }}
            >
              <option value="General">General</option>
              <option value="General">Catering</option>
              <option value="General">Large Parties</option>
            </select>
            <textarea
              style={{ width: '100%', height: '150px', borderRadius: '3px', fontSize: '16px', marginBottom: '20px' }}
              type="textarea"
              placeholder="Message*"
            />
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
              Contact Us
            </button>
          </form>
        </div>
      </section>
    )
  }
}

export default ContactForm
