import React from 'react';
import {Home} from './screens/Home';
import {ThemeProvider} from 'styled-components/native';
import THEME from './theme';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  );
}
