import React from 'react';
import { render, screen } from '@testing-library/react';
import { EventProvider } from '../../context/EventContext';
import Calendar from '../Calendar';

test('renders Calendar component', () => {
  render(
    <EventProvider>
      <Calendar />
    </EventProvider>
  );

  const headingElement = screen.getByText(/events/i);
  expect(headingElement).toBeInTheDocument();
});
