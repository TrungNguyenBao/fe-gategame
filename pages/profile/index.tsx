import React from 'react'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import ProfilePage from '../../components/ProfilePage'

const Profile = () => {
  return <ProfilePage />
}

Profile.Layout = DefaultLayout
Profile.LayoutProps = {
  title: 'My Profile',
}

export default Profile
