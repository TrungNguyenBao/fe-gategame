import React from 'react'
import { FaUserFriends, FaRegCommentAlt, FaChevronLeft } from 'react-icons/fa'
import { Button } from '../shared/form/button'
import { ButtonPrimary } from '../Common/Button'

const ProfilePage: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)
  const [openTab2, setOpenTab2] = React.useState(1)

  return (
    <div className="container">
      <div className="text-[#ffffff78] text-[14px] leading-[24px] mb-[20px]">
        <a href="#" className="flex items-center">
          <FaChevronLeft className="mr-[5px]" />
          Back
        </a>
      </div>
      <div className="flex">
        <div className="flex flex-1">
          <div className="flex flex-col items-center">
            <img
              src="/images/icon/avatar_default.png"
              alt="default avatar"
              className="object-cover items-center rounded-[32px] w-[197px] h-[206px]"
            />
            <button className="mt-[31px] text-[16px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white font-bold">
              Change
            </button>
          </div>
          <div className="flex-col ml-[30px]">
            <div className="flex flex-row items-center">
              <span className="text-[28px] leading-[42px] text-white font-semibold mr-[32px]">
                duongnguyen1216
              </span>
              <a href="#">Level 1</a>
            </div>
            <div className="flex flex-row items-center text-white mb-[12px]">
              <div className="flex flex-row items-center mr-[32px]">
                <FaUserFriends className="mr-[10px]" />
                <span>0 Followers</span>
              </div>
              <div className="flex flex-row items-center mr-[32px]">
                <FaRegCommentAlt className="mr-[10px]" />
                <span>0 Reviews</span>
              </div>
              <div className="flex flex-row items-center mr-[32px]">
                <img
                  src="/images/icon/exp-icon.png"
                  alt=""
                  className="mr-[10px] w-[20px] h-[20px]"
                />
                <span>0 XP</span>
              </div>
            </div>
            <div className="flex flex-row items-center mr-[10px] mb-[12px]">
              <img
                src="/images/icon/international_flag.jpeg"
                alt=""
                className="w-[20px] h-[20px] mr-[10px]"
              />
              <span>International</span>
            </div>
            <div className="">
              <ButtonPrimary className="bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[24px] px-[25px] py-[4px]">
                Edit profile
              </ButtonPrimary>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#121212] p-[20px] rounded-[8px] text-[#ffffff78] text-[16px] leading-[26px] font-normal">
          <div className="mb-[20px]">Badges</div>
          <div className="flex flex-row pr-[20px]">
            <div className="flex flex-1 flex-col pr-[30px]">
              <div className="flex items-center justify-between mb-[20px]">
                <span className="mr-[10px]">Games</span>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between mb-[20px]">
                <span>Inventory</span>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Screenshots</span>
                <span>0</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-between mb-[20px]">
                <span className="mr-[10px]">Videos</span>
                <span>0</span>
              </div>

              <div className="flex items-center justify-between mb-[20px]">
                <span className="mr-[10px]">Guide</span>
                <span>0</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="mr-[10px]">Artworks</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] mt-[60px]">
        <div className="flex items-center justify-between px-[30px] py-[16px]">
          <div className="text-[16px] leading-[26px] font-semibold">API</div>
          <Button className="text-[#006dff] text-[18px] leading-[28px] font-semibold">
            Add API KEY
          </Button>
        </div>
        <div className="flex items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
          <div>59H29HE-J6J4YVG-H8C9TM6-BHB7QWX</div>
          <button className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white ">
            Delete
          </button>
        </div>
        <div className="flex items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
          <div>59H29HE-J6J4YVG-H8C9TM6-BHB7QWX</div>
          <button className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white ">
            Delete
          </button>
        </div>
      </div>

      <div className="flex mt-[60px]">
        <div className="flex-1 pr-[15px]">
          <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] ">
            <div className="flex items-center justify-between px-[30px] py-[16px]">
              <div className="text-[16px] leading-[26px] font-semibold">
                Wallet Overview
              </div>
            </div>
            <div className="flex items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
              <div className="flex flex-row text-[28px] leading-[40px] font-semibold justify-between items-center">
                <span>0</span> &nbsp;
                <img
                  src="/images/icon/binance-usd-busd-logo.png"
                  alt=""
                  className="w-[14px] h-[14px]"
                />
                &nbsp;
                <span className="text-[14px] leading-[20px] font-normal text-[#ffffff78]">
                  BUSD
                </span>
              </div>
              <div>
                <button className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white mr-[20px]">
                  Deposit
                </button>
                <button className="text-[14px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white ">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 pl-[15px]">
          <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] ">
            <div className="flex items-center justify-between px-[30px] py-[16px]">
              <div className="text-[16px] leading-[26px] font-semibold">
                ACTIVITY
              </div>
            </div>
            <div className="flex items-center justify-between border-t-[1px] border-solid border-[#202020] px-[30px] py-[16px]">
              <div className="flex flex-1 flex-col items-center justify-center">
                <img
                  src="/images/icon/ico_no_result.svg"
                  alt=""
                  className="align-middle"
                />
                <div>NO ACTIVITY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#121212] mb-[60px] rounded-[8px] mt-[60px]">
        <div className="flex items-center justify-between px-[30px] py-[16px]">
          <div className="text-[16px] leading-[26px] font-semibold">
            Inventory
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t-[1px] border-solid border-[#202020] pt-[32px] pb-[58px]">
          <img src="/images/icon/nft-now.svg" alt="" />
          <span className="my-[20px] text-[16px] leading-[26px] font-normal">
            You haven’t own any NFTs yet
          </span>
          <ButtonPrimary className="bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[24px] px-[40px] py-[11px]">
            Explore and Buy NFTs now
          </ButtonPrimary>
        </div>
      </div>

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
                Following Games (0)
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
                  openTab2 === 1
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
                  setOpenTab2(1)
                }}
              >
                Latest Reviews
              </button>
            </li>
            <li className="mr-4 text-16 leading-7">
              <button
                className={`inline-block p-4 text-white font-semibold ${
                  openTab2 === 2
                    ? `rounded-t-lg border-b-2 border-blue-600 dark:border-blue-500`
                    : `opacity-50`
                }`}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab2(2)
                }}
              >
                Following KOLs
              </button>
            </li>
          </ul>
        </div>
        <div className="pt-0 pl-4 pr-4 pb-6">
          {openTab2 === 1 && (
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
          {openTab2 === 2 && (
            <div className="p-2 flex items-center">
              <div className="flex items-center flex-1">
                <ButtonPrimary className="bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[20px] px-[12px] py-[4px] mr-[16px]">
                  All (0)
                </ButtonPrimary>
                <ButtonPrimary className="text-[#ffffff78] text-[14px] leading-[20px] px-[12px] py-[4px] bg-[#343a40] hover:bg-[#0d41e1] hover:text-[#fff]">
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
                  <option value="2">English</option>
                  <option value="3">VietNamese</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
