import React from 'react'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import GameDetailPage from '../../components/GameDetailPage'

const Games = () => {
  return <GameDetailPage />
}

Games.Layout = DefaultLayout
Games.LayoutProps = {
  title: 'Gate Game',
}

export default Games
