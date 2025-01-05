import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Form.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbgvdgr");
  if (state.succeeded) {
      return <p className="response">Thank you.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="name" name="name" />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="name">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button className="button-form" type="submit" disabled={state.submitting}>
        SUBMIT
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;