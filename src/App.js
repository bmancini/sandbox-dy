import { Container, Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="App">
      <h1>Header</h1>
      <div style={{'height':'300px'}}>
        <p>Here's some text as well, just for testing purposes of course.</p>
        <Button>Saddle up</Button>
      </div>
    </Container>
  );
}

export default App;
