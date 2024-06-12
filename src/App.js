import React from 'react';
import { AppContainer } from './components/styles';
import NewsLine from './components/NewsLine';
import Terminal from './components/Terminal';

const App = () => {
  return (
    <AppContainer>
      <NewsLine />
      <Terminal />
    </AppContainer>
  );
};

export default App;
