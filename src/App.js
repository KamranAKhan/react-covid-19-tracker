import React from 'react';
import Header from './components/Header';
import MainGrid from './components/MainGrid';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import './App.css';

function App() {
  return (
    <div>
      <Container >
        <Box my={1}>
          <Header />
          <MainGrid />
        </Box>
      </Container>
    </div>
  );
}

export default App;
