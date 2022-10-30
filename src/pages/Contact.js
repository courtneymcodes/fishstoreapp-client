import "./Contact.css"

export default function Home(props) {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name"></input>
        </div>
        <div className="contact-email-div">
          <label htmlFor="email">Your Email:</label>
          <input type="text" name="email"></input>
        </div>
        <div>
          <label className="contact-subject-label" htmlFor="subject">Subject:</label>
          <input type="text" name="subject"></input>
        </div>
        <div className="contact-email-div">
          <label className="contact-message-label" htmlFor="message">Message:</label>
          <input type="text" name="message"></input>
        </div>
        <button className="contact-submit">Submit</button>
      </form>
    </div>
  );
}
