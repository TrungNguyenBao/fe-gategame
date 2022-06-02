import React from 'react'
import BackButton from '../../shared/BackButton'
import PublicProfileTab from '../../../pages/profile/edit/PublicProfileTab'
import ChangePasswordTab from '../../../pages/profile/edit/ChangePasswordTab'

const EditProfilePage: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)

  return (
    <div className="container">
      <BackButton />

      <div className="bg-[#121212] rounded-lg overflow-hidden mt-[60px]">
        <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex">
            <li className="sm:mx-[20px] xxs:mx-[unset] sm:text-16 xxs:text-14 leading-7">
              <button
                className={`inline-block p-4 text-white font-semibold ${
                  openTab === 1
                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                    : `opacity-50`
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
              >
                Public Profile
              </button>
            </li>
            <li className="sm:mx-[20px] xxs:mx-[unset] sm:text-16 xxs:text-14 leading-7">
              <button
                className={`inline-block p-4 text-white font-semibold ${
                  openTab === 2
                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                    : `opacity-50`
                }`}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
              >
                Change Password
              </button>
            </li>
          </ul>
        </div>
        <div className="pt-0 sm:p-[40px] xxs:p-[20px]">
          {openTab === 1 ? <PublicProfileTab /> : <ChangePasswordTab />}
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage
