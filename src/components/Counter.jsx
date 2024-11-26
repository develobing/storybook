import { ButtonCounter } from './ButtonCounter';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>

      <ButtonCounter
        buttonStyleVersion="counter-button2"
        label="Increment"
        size="large"
        backgroundColor="#455fb5"
        onClick={handleClick}
      />
    </div>
  );
};
