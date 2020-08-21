import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import GuestsListItem from '../GuestsListItem';
import { Event } from '../../types';

interface Props {
  event: Event;
}

const GuestsList: React.FC<Props> = ({ event }) => {
  return (
    <ListGroup>
      {event.guestsList.map((guest) => (
        <GuestsListItem guest={guest} event={event} key={guest.id} />
      ))}
    </ListGroup>
  );
};

export default GuestsList;
