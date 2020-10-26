import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

// import { Container } from './styles';

function Video({activeModule, activeLeason}) {
  return <Col sm={9}>
    <h4>Modulo {activeModule}</h4>
    <p> Aula {activeLeason}</p>
    <div style={{backgroundColor: '#000', flex: 1, height: 400}}></div>
  </Col>;
}

export default connect((state)=> { return { activeModule: state.activeModule, activeLeason: state.activeLeason } })(Video) ;