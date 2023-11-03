import { useState } from "react";

// const Counter: FC = () => (
//   <div>
//     <h1>Counter</h1>
//   </div>
// );
// export default Counter;

const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  function handlePlus(): void {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <p>Counter</p>
      <span>{counter}</span>
      <button onClick={handlePlus}>Plus</button>
    </div>
  );
};
export default Counter;
