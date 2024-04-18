import { useState } from 'react';

import Button from '@components/Button/Button';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="flex justify-center bg-red-50">
          <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
            <img alt="Vite logo" className="logo" src="/vite.svg" />
          </a>
          <a href="https://reactjs.org" rel="noreferrer" target="_blank">
            <img alt="React logo" className="logo react" src={reactLogo} />
          </a>
          <h1 className="text-3xl text-red-50 font-bold underline">Hello world!</h1>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button />
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
