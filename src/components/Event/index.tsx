import React from 'react';
import Card from 'react-bootstrap/Card';
import { Event as EventInterface } from '../../types/index';
import GuestsList from '../GuestsList';
import { ACCEPTED } from '../../constants';
import './styles.scss';

interface Props {
  event: EventInterface;
}

const Event: React.FC<Props> = ({ event }) => {
  const getAcceptedGuests = () => {
    return event.guestsList.filter((guest) => guest.status === ACCEPTED).length;
  };
  return (
    <Card className="event">
      <Card.Header as="h5">{event.name}</Card.Header>

      <Card.Body>
        <GuestsList event={event} />
      </Card.Body>

      <Card.Footer className="text-muted">
        {`${getAcceptedGuests()} / ${event.guestsList.length} guests are accepted`}
      </Card.Footer>
    </Card>
  );
};

export default Event;
