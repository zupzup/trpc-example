import React from 'react';
import logo from './logo.svg';
import './App.css';
import type { TRPCRouter } from '../../server/src/router';
import { createReactQueryHooks } from '@trpc/react';

const trpc = createReactQueryHooks<TRPCRouter>();

const q = trpc.useQuery(['get', 1]);
const mut = trpc.useMutation(['create']);
mut.mutate({ name: 'yay' });


// TODO: https://trpc.io/docs/react build example based on it

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
