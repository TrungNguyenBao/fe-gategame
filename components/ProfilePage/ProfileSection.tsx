import React, { useRef } from 'react'
import { FaRegCommentAlt, FaUserFriends } from 'react-icons/fa'
import { ButtonPrimary } from '../Common/Button'
import { useRouter } from 'next/router'

const ProfileSection: React.FC = () => {
  const router = useRouter()
  const inputRef = useRef(null)

  return (
    <div className="flex flex-wrap lg:mx-[-16px] xxs:mx-0 xxs:mb-4 lg:mb-10">
      <section className="flex flex-wrap lg:w-full xl:w-8/12 xxs:px-0 lg:px-4 py-4">
        <div className='xxs:w-full md:w-4/12 lg:w-3/12 text-center p-4'>
          <figure className="xxs:w-2/4 md:w-3/4 m-auto">
            <img src="/images/icon/avatar_default.png" alt="default avatar" className="object-cover items-center rounded-full"/>
          </figure >
          <input type="file" ref={inputRef} accept="image/*" hidden />
          <button className="mt-5 px-[20px] leading-[38px] border rounded-[5px] border-white xxs:mb-2 lg:mb-0"
            onClick={() => {if (inputRef?.current) inputRef.current.click()
              return
            }}>
            Change
          </button>
        </div>
        <div className="xxs:w-full md:w-8/12 lg:w-9/12 xxs:p-0 lg:p-4">
          <div className="md:block lg:flex items-center mb-3">
            <h3 className="xxs:text-24 lg:text-28 leading-tight font-semibold pr-2">
              Marvin McKinney
            </h3>
            <ul className='text-14 xxs:mt-3 lg:mt-0'>
              <li className='inline-block mr-2'>
                <span className='px-2 inline-block leading-7 bg-121212 rounded'>Level 1</span>
              </li>
              <li className='inline-block mr-2'>
                <a href='#' title='title' className='px-2 inline-block bg-blue leading-7 rounded'>expert</a>
              </li>
              <li className='inline-block mr-2'>
                <a href='#' title='title' className='px-2 inline-block bg-ocean leading-7 rounded'>KOL</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-white mb-3">
            <div className="flex items-center xxs:mr-4 lg:mr-8">
              <FaUserFriends className="mr-2" />
              <span className="opacity-[0.47]">0 Followers</span>
            </div>
            <div className="flex items-center xxs:mr-4 lg:mr-8">
              <FaRegCommentAlt className="mr-2"/>
              <span className="opacity-[0.47]">0 Reviews</span>
            </div>
            <div className="flex items-center xxs:mr-4 lg:mr-8">
              <img src="/images/icon/exp-icon.png" alt="" className="mr-2 w-5 h-5"/>
              <span className="opacity-[0.47]">0 XP</span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <img src="/images/icon/international_flag.jpeg" alt="" className="w-5 h-3 mr-2"/>
            <span className="opacity-[0.47]">International</span>
          </div>
          <p className='opacity-[0.47] mb-4'>
            Ullamco nulla nulla ad voluptate cupidatat occaecat pariatur. Irure exercitation eu in labore labore duis enim est occaecat quis adipisicing. Amet labore ad id amet.
          </p>
          <ButtonPrimary onClick={() => router.push('/profile/edit')} className='text-14 xxs:w-full md:w-auto bg-[#006dff] hover:bg-[#0a85ed]'>
            Edit profile
          </ButtonPrimary>
        </div>
      </section>
      <section className="xxs:w-full xl:w-4/12 xxs:px-0 lg:px-4 py-4">
        <div className="bg-[#121212] p-3 rounded-lg">
          <div className="px-2 py-3">
            <h4 className='opacity-[0.47]'>Badges</h4>
            <ul className='flex flex-wrap mx-[-8px]'>
              <li className='p-2'>
                <figure className='rounded-full w-10 h-10 border border-[#202020] p-1'>
                  <img className='rounded-full h-full w-full' src='/images/icon/Game-ava.png' alt='title'></img>
                </figure>
              </li>
              <li className='p-2'>
                <figure className='rounded-full w-10 h-10 border border-[#202020] p-1'>
                  <img className='rounded-full h-full w-full' src='/images/icon/Game-ava.png' alt='title'></img>
                </figure>
              </li>
              <li className='p-2'>
                <figure className='rounded-full w-10 h-10 border border-[#202020] p-1'>
                  <img className='rounded-full h-full w-full' src='/images/icon/Game-ava.png' alt='title'></img>
                </figure>
              </li>
              <li className='p-2'>
                <figure className='rounded-full w-10 h-10 border border-[#202020] p-1'>
                  <img className='rounded-full h-full w-full' src='/images/icon/Game-ava.png' alt='title'></img>
                </figure>
              </li>
              <li className='p-2'>
                <figure className='rounded-full w-10 h-10 border border-[#202020] p-1'>
                  <img className='rounded-full h-full w-full' src='/images/icon/Game-ava.png' alt='title'></img>
                </figure>
              </li>
              <li className='p-2'>
                <figure className='rounded-full w-10 h-10 border border-[#202020] p-1'>
                  <img className='rounded-full h-full w-full' src='/images/icon/Game-ava.png' alt='title'></img>
                </figure>
              </li>
              <li className='p-2'>
                <button className='rounded-full w-10 h-10 border border-[#202020] p-1 text-14'>+9</button>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap">
            <li className="w-6/12 items-center flex justify-between py-3 px-2">
              <h4 className="opacity-[0.47] pr-3">Games</h4>
              <span className='px-2'>0</span>
            </li>
            <li className="w-6/12 items-center flex justify-between py-3 px-2">
              <h4 className="opacity-[0.47] pr-3">Inventory</h4>
              <span className='px-2'>0</span>
            </li>
            <li className="w-6/12 items-center flex justify-between py-3 px-2">
              <h4 className="opacity-[0.47] pr-3">Screenshots</h4>
              <span className='px-2'>0</span>
            </li>
            <li className="w-6/12 items-center flex justify-between py-3 px-2">
              <h4 className="opacity-[0.47] pr-3">Videos</h4>
              <span className='px-2'>0</span>
            </li>
            <li className="w-6/12 items-center flex justify-between py-3 px-2">
              <h4 className="opacity-[0.47] pr-3">Guide</h4>
              <span className='px-2'>0</span>
            </li>
            <li className="w-6/12 items-center flex justify-between py-3 px-2">
              <h4 className="opacity-[0.47] pr-3">Artworks</h4>
              <span className='px-2'>0</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ProfileSection
