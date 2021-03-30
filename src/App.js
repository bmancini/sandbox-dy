import { Container, Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="App">
      <header className="header-test">
        <h1>This is the header</h1>
      </header>
      <div style={{'height':'300px'}}>
        <p>Here's some text as well, just for testing purposes of course.</p>
        <Button>...</Button>
      </div>
    </Container>
  );
}

export default App;
