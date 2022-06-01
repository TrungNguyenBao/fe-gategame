import React from 'react'
import { DefaultLayout } from '../../../layouts/default-layout/default-layout'
import EditProfilePage from '../../../components/ProfilePage/EditProfilePage'

const EditProfile = () => {
  return <EditProfilePage />
}

EditProfile.Layout = DefaultLayout
EditProfile.LayoutProps = {
  title: 'Edit Profile',
}

export default EditProfile
