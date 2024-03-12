import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlinedButton } from '../styles/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState()
  const [showRules,setShowRules]=useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const resetScore = () => {
    setScore(0);
  }

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber)
    if (selectedNumber === randomNumber) {
      setScore(prev => prev + randomNumber);
    }
    else {
      setScore(prev => prev - 2);

    }
    setSelectedNumber(undefined)
  }

  return (
    <MainContainer>
      <div className='topsection'>
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlinedButton onClick={resetScore}>Reset</OutlinedButton>
        <Button
        onClick={()=>setShowRules((prev)=>!prev)}>
        {showRules?"Hide ":"Show "}Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

const MainContainer = styled.main`
padding-top:70px;
.topsection{
  display:flex;
  justify-content:space-around;
  align-items:end;
}

.btns{
  margin-top:40px;
  display:flex;
  flex-direction:column;
  justify-content:center;
align-items:center;
gap:10px


}

`

export default GamePlay
