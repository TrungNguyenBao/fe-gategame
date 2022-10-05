import React from 'react'
import {AiFillAndroid, AiFillApple} from 'react-icons/ai'

const FollowGameSection: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <section className="bg-[#121212] rounded-lg xxs:mb-8 lg:mb-14">
      <header className="border-b-[1px] border-[#202020]">
        <ul className="flex flex-wrap" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="sm:mr-4 xxs:mr-[unset] sm:text-16 xxs:text-14 leading-7" role="presentation">
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
      </header>
      <div className="p-5">
        {openTab === 1 && (
          <div className="relative">
            <div className="text-center leading-6 hidden">
              This user has not followed any game yet.
            </div>
            <div className='flex flex-wrap mx-[-16px]'>
              <article className='xxs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 px-4 py-3 relative group'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <h3 className='font-semibold leading-snug mt-3 xxs:text-14 md:text-16'>
                  <a className='group-hover:text-blue duration-200 block' href='#' title='title'>Epic Heroes</a>
                </h3>
                <div className='flex flex-wrap items-center mt-1'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
              </article>
              <article className='xxs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 px-4 py-3 relative group'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <h3 className='font-semibold leading-snug mt-3 xxs:text-14 md:text-16'>
                  <a className='group-hover:text-blue duration-200 block' href='#' title='title'>Epic Heroes</a>
                </h3>
                <div className='flex flex-wrap items-center mt-1'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
              </article>
              <article className='xxs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 px-4 py-3 relative group'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <h3 className='font-semibold leading-snug mt-3 xxs:text-14 md:text-16'>
                  <a className='group-hover:text-blue duration-200 block' href='#' title='title'>Epic Heroes</a>
                </h3>
                <div className='flex flex-wrap items-center mt-1'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
              </article>
              <article className='xxs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 px-4 py-3 relative group'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <h3 className='font-semibold leading-snug mt-3 xxs:text-14 md:text-16'>
                  <a className='group-hover:text-blue duration-200 block' href='#' title='title'>Epic Heroes</a>
                </h3>
                <div className='flex flex-wrap items-center mt-1'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
              </article>
              <article className='xxs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 px-4 py-3 relative group'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <h3 className='font-semibold leading-snug mt-3 xxs:text-14 md:text-16'>
                  <a className='group-hover:text-blue duration-200 block' href='#' title='title'>Epic Heroes</a>
                </h3>
                <div className='flex flex-wrap items-center mt-1'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
              </article>
              <article className='xxs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 px-4 py-3 relative group'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <h3 className='font-semibold leading-snug mt-3 xxs:text-14 md:text-16'>
                  <a className='group-hover:text-blue duration-200 block' href='#' title='title'>Epic Heroes</a>
                </h3>
                <div className='flex flex-wrap items-center mt-1'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
              </article>
            </div>
            <div className='border-t-[1px] border-[#202020] pt-5 mt-5 text-center'>
              <a className='font-semibold text-blue inline-block leading-7 px-4' href='#' title='title'>View All</a>
            </div>
          </div>
        )}
        {openTab === 2 && (
          <div className="relative">
            <div className="text-center leading-6">
              This user has not any badge yet.
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
export default FollowGameSection
