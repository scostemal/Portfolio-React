import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="subtitle">Connect</h1>
            <p>
              <FontAwesomeIcon icon={faInbox} />
              contact@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneVolume} />
              999-999-9999
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/scott-malone-05896a158/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/scostemal">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <a href="" download className="btn btn2">
              Download Resume
            </a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" placeholder="How can I help you?" />
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
