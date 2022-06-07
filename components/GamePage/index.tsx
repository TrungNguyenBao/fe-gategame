import React from 'react'
import GameItem from '../Items/GameItem'

const GamePage: React.FC = () => {
  return (
    <div className="lg:p-[40px]">
      {[1, 2, 3, 4, 5, 6, 7].map(() => {
        return <GameItem />
      })}
    </div>
  )
}

export default GamePage
