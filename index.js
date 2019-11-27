import React from 'react'
import ReactDOM from 'react-dom'
// import styled from '@emotion/styled'
import styled from '@xstyled/emotion'

const Bar = styled.div({
  background: 'blue',
  width: 50,
  height: 50
})

const Foo = styled.div({
  padding: 10,
  margin: 10,
  background: 'red',
  width: 50,
  height: 50,
  [Bar]: {
    background: 'yellow',
  }
})

const App = () => (
  <div>
    <Foo>
      <Bar />
    </Foo>
  </div>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
