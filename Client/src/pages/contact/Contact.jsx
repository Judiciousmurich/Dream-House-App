
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <div className="contact-background">
        <h1 className="title">Contact Us</h1>
            <p className="subtitle">Get Helps & Friendly Support</p>
        </div>
        <div className="container">
          <form className="shadow">
            <h4>Fill Up The Form</h4>
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
