import './App.css';
import Paragraph from './components/paragraph/paragraph';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <Paragraph text='Hello, world! I am a paragraph 🙂' color='#008F8C'/>
      <Button label="Click me!" />
    </div>
  );
}

export default App
