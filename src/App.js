import './App.css';
import { ButtonCounter } from './components/ButtonCounter';
import { Counter } from './components/Counter';

/**
 * Let's build a counter app example from scratch with react and storybook best practices and testing
 */
function App() {
  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>

      <Counter>
        <ButtonCounter
          buttonStyleVersion="counter-button2"
          label="Increment"
          size="large"
          backgroundColor="#455fb5"
        />
      </Counter>
    </div>
  );
}

export default App;
