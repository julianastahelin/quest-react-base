import StyledText from './components/StyledText';
import AlertButton from './components/AlertButton';

function App() {
  return (
    <div className="App">
      <StyledText text='Hello, world! I am a paragraph 🙂' color='#008F8C'/>
      <AlertButton label="Click me!" />
    </div>
  );
}

export default App
