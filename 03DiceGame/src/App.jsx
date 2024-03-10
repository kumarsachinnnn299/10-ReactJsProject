import { useState } from 'react'
import styled from  'styled-components'
import StartGame from './components/StartGame'

const Button=styled.button`
background-color:black;
color:white;
padding:10px
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <StartGame/>
    </>
  )
}

export default App
