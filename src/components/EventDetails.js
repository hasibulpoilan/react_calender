import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import './EventDetails.css';



const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, deleteEvent } = useContext(EventContext);
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  const handleDelete = () => {
    deleteEvent(event.id);
    navigate('/'); 
  };

  return (
    <div className='event-details-container'>
       <h2 className="event-title">{event.title}</h2>
       <p className="event-date">{event.date}</p>
      <p>Description: {event.description}</p>
      <Link to={`/edit-event/${event.id}`} className="back-link">Edit Event</Link>
      <button className="back-link" onClick={handleDelete}>Delete Event</button>
    </div>
  );
};

export default EventDetails;
