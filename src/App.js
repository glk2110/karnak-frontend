import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Provider } from 'react-redux'
import GameContainer from './GameContainer'
import Dashboard from './Dashboard'
import { Row, Col } from 'react-bootstrap';
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <Row>
        <Col id='games_container' xs={12} md={3}>
          <GameContainer>
          </GameContainer>
        </Col>
        <Col id='dashboard' xs={12} md={9}>
          <Dashboard>
          </Dashboard>
        </Col>
      </Row>
    </Provider>
  );
}

export default App;
