import React from 'react'
import { DefaultLayout } from '../../layouts/default-layout/default-layout'
import ProfilePage from '../../components/ProfilePage'

const Profile = () => {
  return (
    <div className='lg:px-[30px] xxs:px-[15px]'>
      <ProfilePage />
    </div>
  )
 
}

Profile.Layout = DefaultLayout
Profile.LayoutProps = {
  title: 'My Profile',
}

export default Profile
