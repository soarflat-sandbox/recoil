import React from 'react';
import { RecoilRoot } from 'recoil';

import { CharacterCounter } from './CharacterCounter/';
import { TodoList } from './TodoList/';

function App() {
  return (
    <RecoilRoot>
      <h2>CharacterCounter</h2>
      <CharacterCounter />
      <h2>TodoList</h2>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
