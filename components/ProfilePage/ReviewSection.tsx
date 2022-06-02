import { ButtonPrimary } from '../Common/Button'
import React from 'react'

type FilterType = 'all' | 'review-only'

const ReviewSection: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)
  const [filterType, setFilterType] = React.useState<FilterType>('all')

  const handleChangeFilterType = () => {
    filterType === 'all' ? setFilterType('review-only') : setFilterType('all')
  }

  return (
    <div className="bg-[#121212] rounded-lg overflow-hidden mt-[60px]">
      <div className="mb-5 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-4 text-16 leading-7" role="presentation">
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
              Latest Reviews
            </button>
          </li>
          <li className="mr-4 text-16 leading-7">
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
              Following KOLs
            </button>
          </li>
        </ul>
      </div>
      <div className="pt-0 pl-4 pr-4 pb-6">
        {openTab === 1 && (
          <div className="p-2 text-center">
            <div className="flex flex-col items-center justify-center pt-[32px] pb-[58px]">
              <img src="/images/icon/empty-review.svg" alt="" />
              <span className="my-[20px] text-[16px] leading-[26px] font-normal">
                This user has not reviewed any game yet.
              </span>
              <ButtonPrimary className="bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[24px] px-[40px] py-[11px]">
                See his Following KOLs
              </ButtonPrimary>
            </div>
          </div>
        )}
        {openTab === 2 && (
          <div className="p-2 flex items-center">
            <div className="flex items-center flex-1">
              <ButtonPrimary
                onClick={handleChangeFilterType}
                className={`${
                  filterType === 'all'
                    ? 'bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[20px] px-[12px] py-[4px] mr-[16px]'
                    : `text-[#ffffff78] text-[14px] leading-[20px] px-[12px] py-[4px] bg-[#343a40] hover:bg-[#0d41e1] hover:text-[#fff]`
                }`}
              >
                All (0)
              </ButtonPrimary>
              <ButtonPrimary
                onClick={handleChangeFilterType}
                className={`${
                  filterType === 'review-only'
                    ? 'bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[20px] px-[12px] py-[4px] ml-[16px]'
                    : `text-[#ffffff78] text-[14px] leading-[20px] px-[12px] py-[4px] bg-[#343a40] hover:bg-[#0d41e1] hover:text-[#fff]`
                }`}
              >
                with Review only (0)
              </ButtonPrimary>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <select
                className="form-select appearance-none
                block
                w-1/3
                px-3
                py-1.5
                text-base
                font-normal
                text-white
                bg-black bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="2">Sort y</option>
                <option value="3">Sort by Name A-Z</option>
                <option value="3">Sort by Name Z-A</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default ReviewSection
