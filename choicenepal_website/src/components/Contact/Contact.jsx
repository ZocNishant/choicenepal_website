import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7436d505-e37d-41d9-9098-c9d27f000dfe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contactLeft">
        <h3>Contact Us</h3>
        <p>Feel free to reach out and have a word with us.</p>

        <ul>
          <li>nepal@choicehumanitarian.org</li>
          <li>New Baneshwor, Kathmandu, Nepal</li>
          <li>+977 9802345123</li>
        </ul>
      </div>

      <div className="contactRight">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn darkBtn">
            Submit Now
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
