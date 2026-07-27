import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Debug: check what’s being sent
    console.log("Submitting:", formData);

    try {
      const response = await axios.post("http://localhost:8080/api/contact", formData);
      alert("Message saved! ID: " + response.data.id);
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving message");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
  ></textarea>
  <button type="submit">Send</button>
</form>

  );
}

export default ContactForm;
