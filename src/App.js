import { Container, Jumbotron, Row } from 'react-bootstrap';
import Sidebar from './components/SideBar';
import Video from './components/Video';
import { Provider } from 'react-redux';
import store from './store';
// import './App.css';

function App() {
  return(
    <Provider store={store}>
      <Jumbotron>
          <Container >
            <Row>
              <Sidebar />
              <Video />
            </Row>
          </Container>
      </Jumbotron>
    </Provider>
  )
}

export default App;
