import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import Calendar from './components/Calendar';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';
import EventDetails from './components/EventDetails';


const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
