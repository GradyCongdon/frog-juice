import React from 'react';
import { useMachine } from '@xstate/react';
import { gameMachine } from './machine';
import './reset.css';
import './App.scss';
import { Ingredient } from './Cards/Ingredient';
import { Cards } from './Cards';

type Send = (action: string) => void;

const CardStack = ({ onClick }: any) => {
  return (
    <figure onClick={onClick}>
      Back
    </figure>
  );
}

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
      <CardStack onClick={() => send('DRAW')} />

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

const DebugGame = ({ state, send }: GameProps) => {
  return (
    <aside>
      <pre>
        {JSON.stringify(state, null, '  ')}
      </pre>
    </aside>
  );
}


function App() {
  const [state, send] = useMachine(gameMachine);

  return (
    <>
      <main>
        <h1 className="game-title">Frog Juice</h1>
        <Cards />
      </main>
    </>
  );
}


export default App;
