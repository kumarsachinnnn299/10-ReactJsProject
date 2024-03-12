import styled from "styled-components"

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>

      <div className="dice"
        onClick={rollDice}>
        <img src={`images/diceNumber/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
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
