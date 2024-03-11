import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'

const GamePlay = () => {
  return (
    <MainContainer>
      <div className='topsection'>
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice/>
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


`

export default GamePlay
