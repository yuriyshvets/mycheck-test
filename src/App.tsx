import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import EventsList from './components/EventsList';
import { setEventsAsync } from './store/actions';
import './styles/general.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEventsAsync());
  }, []);

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="8" className="main-content">
            <Header />

            <h1>Guests list by event</h1>

            <EventsList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
