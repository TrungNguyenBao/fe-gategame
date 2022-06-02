import React from 'react'
import ProfileSection from './ProfileSection'
import ApiSection from './ApiSection'
import InventorySection from './InventorySection'
import FollowGameSection from './FollowGameSection'
import ReviewSection from './ReviewSection'
import BackButton from '../shared/BackButton'
import OverviewSection from './OverviewSection'

const ProfilePage: React.FC = () => {
  return (
    <>
      <BackButton />
      <ProfileSection />
      <ApiSection />
      <OverviewSection />
      <InventorySection />
      <FollowGameSection />
      <ReviewSection />
    </>
  )
}

export default ProfilePage
