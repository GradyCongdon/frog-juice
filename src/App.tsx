import React from 'react';
import { useMachine } from '@xstate/react';
import { gameMachine } from './machine';
import './App.css';

type Send = (action: string) => void;

type TurnProps = {
  state: string
  send: Send
};
const Turn = ({state, send}: TurnProps) => {
  return (
    <>
      <h2>
        Turn {state}
      </h2>
      <button onClick={() => send('DRAW')}>
        Draw
      </button>

      <button onClick={() => send('ACTION')}>
        Action
      </button>
    </>
  );

}

type GameProps = {
  state: any
  send: Send
};
const Game = ({state, send}: GameProps) => {
  if (state.value) {
    return (<Turn state={state.value} send={send}/>);
  } else {
    return (<button onClick={() => send('TURN')}>Turn</button>);
  }
}

function App() {
  const [ state, send ] = useMachine(gameMachine);
  return (
    <div>
      <h1>Frog Juice</h1>
      <Game state={state} send={send}/>
      <pre>
        {JSON.stringify(state, null, '  ')}
      </pre>
    </div>
  );
}


export default App;
