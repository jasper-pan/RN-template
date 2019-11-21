
import React from 'react'
import AppContainer from './src/routes/index.tsx'
import { ThemeProvider } from 'react-native-elements';
export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    )
  }
}
