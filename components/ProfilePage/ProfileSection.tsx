import React, { useRef } from 'react'
import { FaRegCommentAlt, FaUserFriends } from 'react-icons/fa'
import { ButtonPrimary } from '../Common/Button'
import { useRouter } from 'next/router'

const ProfileSection: React.FC = () => {
  const router = useRouter()
  const inputRef = useRef(null)

  return (
    <section className="flex xxs:flex-col lg:flex-row">
      <div className="flex flex-[2] xxs:flex-col sm:flex-row">
        <div className="flex flex-col items-center">
          <img
            src="/images/icon/avatar_default.png"
            alt="default avatar"
            className="object-cover items-center rounded-[32px] w-[197px] h-[206px]"
          />
          <input type="file" ref={inputRef} accept="image/*" hidden />
          <button
            className="mt-[31px] text-[16px] leading-[24px] px-[20px] py-[6px] border-solid border-[1px] rounded-[5px] border-white font-bold"
            onClick={() => {
              if (inputRef?.current) inputRef.current.click()
              return
            }}
          >
            Change
          </button>
        </div>
        <div className="flex-col ml-[30px] xxs:">
          <div className="flex flex-row items-center">
            <span className="text-[28px] leading-[42px] text-white font-semibold mr-[32px] xxs:text-[24px] xxs:mr-[12px]">
              duongnguyen1216
            </span>
            <a href="#">Level 1</a>
          </div>
          <div className="flex flex-row items-center text-white mb-[12px] text-[16px] leading-[26px]">
            <div className="flex flex-row items-center mr-[32px]">
              <FaUserFriends className="mr-[10px]" />
              <span className="text-[#ffffff78]">0 Followers</span>
            </div>
            <div className="flex flex-row items-center mr-[32px]">
              <FaRegCommentAlt className="mr-[10px]" />
              <span className="text-[#ffffff78]">0 Reviews</span>
            </div>
            <div className="flex flex-row items-center mr-[32px]">
              <img
                src="/images/icon/exp-icon.png"
                alt=""
                className="mr-[10px] w-[20px] h-[20px]"
              />
              <span className="text-[#ffffff78]">0 XP</span>
            </div>
          </div>
          <div className="flex flex-row items-center mr-[10px] mb-[12px]">
            <img
              src="/images/icon/international_flag.jpeg"
              alt=""
              className="w-[20px] h-[12px] mr-[10px]"
            />
            <span className="text-[#ffffff78]">International</span>
          </div>

          <ButtonPrimary
            onClick={() => router.push('/profile/edit')}
            className="bg-[#006dff] hover:bg-[#0a85ed] text-[14px] leading-[24px] px-[25px] py-[4px]"
          >
            Edit profile
          </ButtonPrimary>
        </div>
      </div>

      <div className="flex-[1] xxs:mt-[40px]">
        <div className="bg-[#121212] p-[20px] rounded-[8px] text-[#ffffff78] text-[16px] leading-[26px] font-normal">
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
    </section>
  )
}

export default ProfileSection
