import React, { useState } from 'react'
import Square from './Square'

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(false)
  const[moveCount, setMoveCount] = useState(0)

  const checkWinner = () => {
    const winningIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let index of winningIndex) {
      const [a, b, c] = index
      if (state[a]!==null && state[a]===state[b] && state[b]===state[c])
        return true;
    }
    return false
  }

  const result = checkWinner()

  const handleClick = (ind) => {
    setMoveCount(moveCount+1)
    const newArr = [...state]
    newArr[ind] = isX ? "X" : "O"
    setState(newArr)
    setIsX(!isX)
  }
  console.log(moveCount, result)
  if(moveCount===9 && result===false) return <><h1>Match draw</h1><button onClick={()=>window.location.reload()} >Play again</button></>
  if(result) return <div><h1>{!isX?"X":"O"} won</h1><button onClick={()=>window.location.reload()} >Play again</button></div>
  return (
    <div style={{ margin: "auto", maxWidth: "20rem", marginTop: "5rem" }} >
      <div className="board-row">
              <Square value={state[0]} onClick={() => handleClick(0)} />
              <Square value={state[1]} onClick={() => handleClick(1)} />
              <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
              <Square value={state[3]} onClick={() => handleClick(3)} />
              <Square value={state[4]} onClick={() => handleClick(4)} />
              <Square value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
              <Square value={state[6]} onClick={() => handleClick(6)} />
              <Square value={state[7]} onClick={() => handleClick(7)} />
              <Square value={state[8]} onClick={() => handleClick(8)} />
            </div>
    </div>
  )
}
