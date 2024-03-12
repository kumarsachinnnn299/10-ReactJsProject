import { useState } from 'react'
import styled from  'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

const Button=styled.button`
background-color:black;
color:white;
padding:10px
`
function App() {
  const [isGameStarted, setisGameStarted] = useState(false)
  const toggleGamePlay=()=>{
    setisGameStarted((prev)=>!prev);
  }

  return (
    <>

   {isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
