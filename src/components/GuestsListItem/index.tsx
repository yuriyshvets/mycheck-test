import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Guest, Event, Status } from '../../types';
import { updateGuestAsync } from '../../store/actions';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import SpinnerButton from '../common/SpinnerButton';
import { ACCEPTED, DECLINED } from '../../constants';
import './styles.scss';

interface Props {
  guest: Guest;
  event: Event;
}

const GuestsListItem: React.FC<Props> = ({ guest, event }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(guest.status);
  const [declineLoading, setDeclineLoading] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleStatus = (status: Status) => {
    dispatch(
      updateGuestAsync({
        eventId: event.id,
        guestId: guest.id,
        status,
      }),
    );
    setStatus(status);
    status === ACCEPTED ? setAcceptLoading(true) : setDeclineLoading(true);
  };

  useEffect(() => {
    if (status !== guest.status) {
      setDeclineLoading(false);
      setAcceptLoading(false);
    }
    handleClose();
  }, [guest, status]);

  return (
    <ListGroup.Item bsPrefix="guest-item">
      <div className="user-info">
        <span className="user-name">{guest.name} </span>
        {guest.status === ACCEPTED ? (
          <Badge variant="primary">Accepted</Badge>
        ) : (
          <Badge variant="danger">Declined</Badge>
        )}
      </div>

      <Button onClick={handleShow}>Manage</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Guest details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <b>Name:</b> {guest.name}
            </ListGroup.Item>

            <ListGroup.Item>
              <b>E-mail:</b> {guest.email}
            </ListGroup.Item>

            <ListGroup.Item>
              <b>Invitation status:</b> {guest.status}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <SpinnerButton
            variant="danger"
            onClick={() => handleStatus(DECLINED)}
            loading={declineLoading}
            disabled={declineLoading || guest.status === DECLINED}
          >
            Decline
          </SpinnerButton>

          <SpinnerButton
            variant="primary"
            onClick={() => handleStatus(ACCEPTED)}
            loading={acceptLoading}
            disabled={acceptLoading || guest.status === ACCEPTED}
          >
            Accept
          </SpinnerButton>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
};

export default GuestsListItem;
