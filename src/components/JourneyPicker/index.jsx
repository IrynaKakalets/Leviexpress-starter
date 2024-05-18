import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('Mesto 01');
  const [toCity, setToCity] = useState('Mesto 02');
  const [date, setDate] = useState('12-28-1992');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromCity);
    console.log(toCity);
    console.log(date);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={setFromCity}>
              <option value="">Vyberte</option>
              <option value={fromCity}>Město 01</option>
              <option value={fromCity}>Město 02</option>
              <option value={fromCity}>Město 03</option>
              <option value={fromCity}>Město 04</option>
              <option value={fromCity}>Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={setToCity}>
              <option value="">Vyberte</option>
              <option value={toCity}>Město 01</option>
              <option value={toCity}>Město 02</option>
              <option value={toCity}>Město 03</option>
              <option value={toCity}>Město 04</option>
              <option value={toCity}>Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={setDate}>
              <option value="">Vyberte</option>
              <option value={date}>Datum 01</option>
              <option value={date}>Datum 02</option>
              <option value={date}>Datum 03</option>
              <option value={date}>Datum 04</option>
              <option value={date}>Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
  </div>
 );
};
