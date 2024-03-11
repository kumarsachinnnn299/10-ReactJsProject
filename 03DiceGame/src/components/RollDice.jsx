import { useState } from "react"
import styled from "styled-components"

const RollDice = () => {

    const [currentDice,setCurrentDice]=useState(1);
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const rollDice=()=>{
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice(randomNumber)
    }
  return (
    <DiceContainer>
      
      <div className="dice"
      onClick={rollDice}>
        <img src={`images/diceNumber/dice_${currentDice}.png`} alt="dice1"/>
      </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer=styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;

p{
    font-size:24px
}
.dice{
    cursor:pointer;
}


`

export default RollDice
