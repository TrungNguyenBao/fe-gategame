import { ButtonPrimary } from '../Common/Button'
import React from 'react'
import {AiFillAndroid, AiFillApple, AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai'
import {HiPlusSm} from 'react-icons/hi'

type FilterType = 'all' | 'review-only'

const ReviewSection: React.FC = () => {
  const [openTab, setOpenTab] = React.useState(1)
  const [filterType, setFilterType] = React.useState<FilterType>('all')

  const handleChangeFilterType = () => {
    filterType === 'all' ? setFilterType('review-only') : setFilterType('all')
  }

  return (
    <section className="bg-[#121212] rounded-lg xxs:mb-8 lg:mb-14">
      <header className="border-b-[1px] border-[#202020] relative">
        <ul
          className="flex flex-wrap"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
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
              Latest Reviews
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
              Following KOLs
            </button>
          </li>
        </ul>
      </header>
        {openTab === 1 && (
          <div className="p-5">
            <div className='hidden text-center'>
              <figure className='mb-4 text-center'>
                <img className='inline-block' src="/images/icon/empty-review.svg" alt="" />
              </figure>
              <p className="mb-4">
                This user has not reviewed any game yet.
              </p>
              <ButtonPrimary className="bg-[#006dff] hover:bg-[#0a85ed] text-14 leading-[40px] px-5">
                See his Following KOLs
              </ButtonPrimary>
            </div>
            <div className='flex flex-wrap mx-[-16px] border-b-[1px] border-[#202020] pb-5 mb-5'>
              <div className='xxs:w-full md:w-6/12 lg:w-3/12 px-4'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <div className='flex flex-wrap items-center my-2'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
                <h3 className='font-semibold leading-snug mb-3'>
                  <a className='group-hover:text-blue duration-200' href='#' title='title'>No Man’s Sky</a>
                </h3>
                <ul className='text-14'>
                  <li className='inline-block mr-1 mb-1'><a className='text-blue border inline-block border-blue py-0.5 px-2 rounded' href='#' title='title'>free2play</a></li>
                  <li className='inline-block mr-1 mb-1'><a className='text-blue border inline-block border-blue py-0.5 px-2 rounded' href='#' title='title'>play2earn</a></li>
                  <li className='inline-block mr-1 mb-1'><a className='text-blue border inline-block border-blue py-0.5 px-2 rounded' href='#' title='title'>win2earn</a></li>
                </ul>
              </div>
              <div className='xxs:w-full md:w-6/12 lg:w-6/12 px-4 xxs:mt-5 md:mt-0'>
                <div className='mb-3 flex flex-wrap items-center'>
                  <span className='text-22 font-semibold bg-green rounded-lg px-4 leading-10 inline-block'>8.4</span>
                  <span className='text-14 opacity-[0.47] ml-2'>10:30am 11/12/2021</span>
                </div>
                <div className='opacity-[0.68]'>
                  I've just completed the this game and It has become my favorite one in terms of puzzle solving and most importantly its graphics and background music. 
                  What begins as a simple rescue mission becomes the battleground of a new war as alien invaders swarm over a chain of North Korean islands. 
                  Playing as super-soldier Nomad, you are armed with a powerful Nanosuit equipped with Speed...
                </div>
                <button className='text-blue text-14 font-semibold mt-2'>Read full review</button>
              </div>
              <div className='xxs:w-full md:w-full lg:w-3/12 px-4 xxs:mt-5 lg:mt-0'>
                <div className='bg-[#202020] flex flex-wrap rounded-lg px-5 pt-3 pb-1'>
                  <div className='xxs:w-full md:w-6/12 lg:w-full py-2'>
                    <h4 className='text-14 text-gray mb-2 leading-snug'>Was this review helpful?</h4>
                    <div className='mt-3 text-14'>
                      <button className='leading-7 px-2 bg-[#495057] rounded duration-200 mr-2 mb-2'><AiTwotoneLike className='inline-block mr-1.5'/>05</button>
                      <button className='leading-7 px-2 bg-[#495057] rounded duration-200 mr-2 mb-2'><AiTwotoneDislike className='inline-block mr-1.5'/>01</button>
                    </div>
                  </div>
                  <div className='xxs:w-full md:w-6/12 lg:w-full py-2'>
                    <h4 className='text-14 text-gray mb-2 leading-snug'>Review award?</h4>
                    <ul className='flex flex-wrap'>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'>
                          <img src="/images/icon/Badges04.svg" alt="title" className='inline-block mr-1'></img>10
                        </a>
                      </li>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'>
                          <img src="/images/icon/Badges05.svg" alt="title" className='inline-block mr-1'></img>10
                        </a>
                      </li>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'>
                          <img src="/images/icon/Badges06.svg" alt="title" className='inline-block mr-1'></img>10
                        </a>
                      </li>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'><HiPlusSm className='inline-block text-16'/></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap mx-[-16px] border-b-[1px] border-[#202020] pb-5 mb-5'>
              <div className='xxs:w-full md:w-6/12 lg:w-3/12 px-4'>
                <figure className='relative xxs:pt-[50%] md:pt-[60.2%] xl:pt-[50%] rounded-lg overflow-hidden'>
                    <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                      <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                    </a>
                </figure>
                <div className='flex flex-wrap items-center my-2'>
                  <figure className='mr-1'>
                    <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                  </figure>
                  <span className='opacity-[0.47] text-14'>Binance</span>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillAndroid className='text-16'/></a>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200 ml-2' href='#' title='title'><AiFillApple className='text-16'/></a>
                </div>
                <h3 className='font-semibold leading-snug mb-3'>
                  <a className='group-hover:text-blue duration-200' href='#' title='title'>No Man’s Sky</a>
                </h3>
                <ul className='text-14'>
                  <li className='inline-block mr-1 mb-1'><a className='text-blue border inline-block border-blue py-0.5 px-2 rounded' href='#' title='title'>free2play</a></li>
                  <li className='inline-block mr-1 mb-1'><a className='text-blue border inline-block border-blue py-0.5 px-2 rounded' href='#' title='title'>play2earn</a></li>
                  <li className='inline-block mr-1 mb-1'><a className='text-blue border inline-block border-blue py-0.5 px-2 rounded' href='#' title='title'>win2earn</a></li>
                </ul>
              </div>
              <div className='xxs:w-full md:w-6/12 lg:w-6/12 px-4 xxs:mt-5 md:mt-0'>
                <div className='mb-3 flex flex-wrap items-center'>
                  <span className='text-22 font-semibold bg-orange rounded-lg px-4 leading-10 inline-block'>8.4</span>
                  <span className='text-14 opacity-[0.47] ml-2'>10:30am 11/12/2021</span>
                </div>
                <div className='opacity-[0.68]'>
                  I've just completed the this game and It has become my favorite one in terms of puzzle solving and most importantly its graphics and background music. 
                  What begins as a simple rescue mission becomes the battleground of a new war as alien invaders swarm over a chain of North Korean islands. 
                  Playing as super-soldier Nomad, you are armed with a powerful Nanosuit equipped with Speed...
                </div>
                <button className='text-blue text-14 font-semibold mt-2'>Read full review</button>
              </div>
              <div className='xxs:w-full md:w-full lg:w-3/12 px-4 xxs:mt-5 lg:mt-0'>
                <div className='bg-[#202020] flex flex-wrap rounded-lg px-5 pt-3 pb-1'>
                  <div className='xxs:w-full md:w-6/12 lg:w-full py-2'>
                    <h4 className='text-14 text-gray mb-2 leading-snug'>Was this review helpful?</h4>
                    <div className='mt-3 text-14'>
                      <button className='leading-7 px-2 bg-[#495057] rounded duration-200 mr-2 mb-2'><AiTwotoneLike className='inline-block mr-1.5'/>05</button>
                      <button className='leading-7 px-2 bg-[#495057] rounded duration-200 mr-2 mb-2'><AiTwotoneDislike className='inline-block mr-1.5'/>01</button>
                    </div>
                  </div>
                  <div className='xxs:w-full md:w-6/12 lg:w-full py-2'>
                    <h4 className='text-14 text-gray mb-2 leading-snug'>Review award?</h4>
                    <ul className='flex flex-wrap'>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'>
                          <img src="/images/icon/Badges04.svg" alt="title" className='inline-block mr-1'></img>10
                        </a>
                      </li>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'>
                          <img src="/images/icon/Badges05.svg" alt="title" className='inline-block mr-1'></img>10
                        </a>
                      </li>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'>
                          <img src="/images/icon/Badges06.svg" alt="title" className='inline-block mr-1'></img>10
                        </a>
                      </li>
                      <li className='inline-block text-14 mr-2 mb-2'>
                        <a className='leading-7 px-2 bg-[#495057] inline-block rounded' href='#' title='title'><HiPlusSm className='inline-block text-16'/></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {openTab === 2 && (
          <div className="p-5 flex items-center">
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
    </section>
  )
}
export default ReviewSection
