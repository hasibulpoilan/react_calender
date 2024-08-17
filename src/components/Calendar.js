import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import EventFilter from './EventFilter';
import './Calendar.css';
import './Home.css';


const Calendar = () => {
  const { events } = useContext(EventContext);
  const [filterCategory, setFilterCategory] = useState('');

  const filteredEvents = filterCategory
    ? events.filter((event) => event.category === filterCategory)
    : events;

  return (
    <div className="calendar-wrapper">
      <h2 className="calendar-title">Calendar</h2>
      <Link to="/add-event" className="add-event-link">
        Add Event
      </Link>
      <EventFilter
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <div className="calendar-container">
        {filteredEvents.map((event) => (
          <div key={event.id} className="calendar-event">
            <Link to={`/event/${event.id}`} className="event-link">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
