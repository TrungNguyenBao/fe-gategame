import React from 'react'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import GamePage from '../../components/GamePage'

const Games = () => {
  return <GamePage />
}

Games.Layout = DefaultLayout
Games.LayoutProps = {
  title: 'Gate Game',
}

export default Games
