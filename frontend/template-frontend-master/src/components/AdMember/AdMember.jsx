import React, { useState } from 'react';
import axios from 'axios';
import StyleAdMember from './StyleAdMember';

export default function AdMember() {
  const [inputName, setName] = useState('');
  const [inputQuality, setQuality] = useState('');
  const [inputAvatar, setAvatar] = useState('');

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeQuality = (evt) => {
    setQuality(evt.target.value);
  };

  const handleChangeAvatar = (evt) => {
    setAvatar(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      Name: inputName,
      Quality: inputQuality,
      Avatar: inputAvatar,
    };
    axios.post('http://localhost:8000/members', dataToSend);
  };

  return (
    <StyleAdMember>
      <div>
        <h2>Ajouter un(e) Argonaute</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              value={inputName}
              onChange={handleChangeName}
              name="from_name"
              placeholder="insert your name here"
            />
          </label>
          <label htmlFor="description">
            <input
              type="text"
              value={inputQuality}
              onChange={handleChangeQuality}
              name="from_description"
              placeholder="description"
            />
          </label>
          <label htmlFor="avatar">
            <input
              type="text"
              value={inputAvatar}
              onChange={handleChangeAvatar}
              name="from_avatar"
              placeholder="avatar url"
            />
          </label>
          <input type="submit" value="send" />
        </form>
      </div>
    </StyleAdMember>
  );
}
