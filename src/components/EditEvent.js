import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import './EventDetails.css';
const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, editEvent } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const eventToEdit = events.find((event) => event.id === parseInt(id));
    if (eventToEdit) {
      setTitle(eventToEdit.title);
      setDate(eventToEdit.date);
    }
  }, [id, events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editEvent({
      id: parseInt(id),
      title,
      date,
    });
    navigate('/');
  };

  return (
    <div className='event-details-container'>
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditEvent;
