import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function actionActiveLesson(module, leason){
  return {
    type: 'TOOGLE_LESSON',
    module,
    leason
  }
}

function Sidebar({modules, dispatch}) {
  return  ( 
    <Col>
      {modules.map(element=> 
        <div key={element.id}>
          <h4>{element.title}</h4>
          <ul>
            {
              element.leasons.map(leasons=> <li> { leasons.title } <Button onClick={()=>dispatch(actionActiveLesson(element.title, leasons.title))}>Active</Button> </li>)
            }
          </ul>
          <br/>
        </div>
        
      )}
    </Col>
  
  );
}

export default connect(state => ({ modules: state.modules}))(Sidebar);