import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { useHistory } from 'react-router-dom';

const EventForm = ({ event }) => {
  const { addEvent, editEvent } = useContext(EventContext);
  const [title, setTitle] = useState(event ? event.title : '');
  const [date, setDate] = useState(event ? event.date : '');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: event ? event.id : Date.now(), title, date };
    event ? editEvent(newEvent) : addEvent(newEvent);
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Save Event</button>
    </form>
  );
};

export default EventForm;
