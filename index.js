import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from '@xstyled/emotion'

const Bar = styled.div({
  background: 'info',
  width: 50,
  height: 50
})

const Foo = styled.div({
  padding: 10,
  margin: 10,
  backgroundColor: 'error',
  width: 50,
  height: 50,
  [Bar]: {
    backgroundColor: 'success',
  }
})

const App = () => (
  <ThemeProvider theme={{ colors: {
    error: 'red',
    success: 'green',
    info: 'blue',
  }}}>
    <Foo>
      <Bar background='info' />
    </Foo>
  </ThemeProvider>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
