import React from 'react'

const FollowGameSection: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <div className="bg-[#121212] rounded-lg overflow-hidden mt-[60px]">
      <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li
            className="sm:mr-4 xxs:mr-[unset] sm:text-16 xxs:text-14 leading-7"
            role="presentation"
          >
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
              Following Games (0)
            </button>
          </li>
          <li className="sm:mr-4 xxs:mr-[unset] sm:text-16 xxs:text-14 leading-7">
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
              Giving Badges (0)
            </button>
          </li>
        </ul>
      </div>
      <div className="pt-0 pl-4 pr-4 pb-6">
        {openTab === 1 && (
          <div className="p-2 text-center">
            <div className="text-16 leading-6 font-normal">
              This user has not followed any game yet.
            </div>
          </div>
        )}
        {openTab === 2 && (
          <div className="p-2 text-center">
            <div className="text-16 leading-6 font-normal">
              This user has not any badge yet.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default FollowGameSection
