import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { RootState } from '../../store';
import Event from '../Event';
import './styles.scss';

const EventsList: React.FC = () => {
  const events = useSelector((store: RootState) => store.events);

  return (
    <div className="event-list">
      {events ? (
        events.map((event) => <Event event={event} key={event.id} />)
      ) : (
        <Spinner animation="border" role="status" style={{ margin: 120 }}>
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default EventsList;
