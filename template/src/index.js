import React from 'react'
import { render } from 'react-dom'
import App from './app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { mainTheme } from './config/theme'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  *{
    box-sizing: border-box;
  }

  body {
    padding: 0px;
    margin: 0px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: ${props => props.theme.txt};
  }
`

const store = createStore(window.REDUX_DATA)

render(
  <Provider>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
)
