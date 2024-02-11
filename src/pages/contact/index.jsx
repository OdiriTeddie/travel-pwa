import { PageHeader } from "../../component/page-header";
import "./index.styles.scss";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <PageHeader label="Contact Us" />
      <section className="container contact-details">
        <div className="contact-box">
          <div className="contact-box__heading">
            <div className="contact-box__icon">
              <FaLocationDot />
            </div>
            <h3>Location</h3>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-box__heading">
            <div className="contact-box__icon">
              <FaLocationDot />
            </div>
            <h3>Location</h3>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-box__heading">
            <div className="contact-box__icon">
              <FaLocationDot />
            </div>
            <h3>Location</h3>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
          <div className="contact-box__details">
            <h4>Travel Agency</h4>
            <p>1626 Michigan Ave, Wolverhampton WV39 0JT, United Kingdom</p>
          </div>
        </div>
      </section>
      <section className="container-wide contact-form">
        <div className="form-header">
          <p className="form-header__subheading">Plan your Next Trip</p>
          <h2>Get in Touch</h2>
          <p className="form-header__subtext">
            Write to us for personalized travel advice or for information on
            group travel and last minute travel, all travel is insured and safe.
          </p>

          <form className="main-form">
            <input type="text" placeholder="Type your name" />

            <input type="email" placeholder="Insert your email" />

            <textarea cols="30" rows="4" placeholder=" Your Message"></textarea>

            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
