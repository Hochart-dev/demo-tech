import React from 'react';
import StyleForm from './StyleContactUS';

export default function ContactUs() {
  return (
    <StyleForm>
      <div>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="contact-form">
          <label htmlFor="name">
            <input
              type="text"
              name="from_name"
              placeholder="insert your name here"
            />
          </label>
          <label htmlFor="description">
            <input
              type="description"
              name="from_description"
              placeholder="description"
            />
          </label>
          <label htmlFor="avatar">
            <input type="avatar" name="from_avatar" placeholder="avatar url" />
          </label>
          <input type="submit" value="send" />
        </form>
      </div>
    </StyleForm>
  );
}
