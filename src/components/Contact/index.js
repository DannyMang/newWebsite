import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const serviceID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const templateToken = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const emailjsToken = process.env.REACT_APP_EMAIL_JS_USER_TOKEN;
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  return () => {
    clearTimeout(timeoutId);
  };
},[])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(serviceID, templateToken, form.current, emailjsToken)
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Contact me using the form below!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Daniel Ung,
          <br />
          San Jose State University
          <br />
          <br />
          <span>daniel.ung@sjsu.edu</span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[37.3352, -121.8811]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[37.3382, -121.8863]}>
                <Popup>San Jose, California</Popup>
                </Marker>
            </MapContainer>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
