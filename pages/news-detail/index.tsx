import React from 'react';
import BackButton from '../../components/shared/BackButton';
import { BsFillSuitDiamondFill, BsChevronLeft, BsBoxArrowUpRight, BsArrowRightCircleFill, BsFillBookmarkFill} from 'react-icons/bs'
import { FaComment, FaShareAlt} from 'react-icons/fa'
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt, AiOutlineFlag, AiFillWindows, AiFillApple, AiFillCaretDown, AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai'
import { DefaultLayout } from '../../layouts/default-layout/default-layout';

const NFTdetail = () => {
  return (
    <div className='lg:px-[30px] xxs:px-[15px]'>
      <BackButton />
      <section className='flex flex-wrap mx-[-16px]'>
        <div className='xxs:w-full lg:w-8/12 2xl:w-7/12 px-4 mb-7'>
          <h1 className='text-28 font-semibold mb-1 leading-tight'>Final Fantasy VII remake intergrade comes to Epic Games Store on December 16, 2021</h1>
          <label className='text-14 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
          <div className='mt-4 flex items-center text-14'>
              <span className='opacity-[0.68] mr-2'>By</span>
              <figure className='rounded-full w-7 h-7 overflow-hidden mr-2'>
                <img src="/images/icon/Game-ava.png" alt="title" className=""></img>
              </figure>
              <div className='font-semibold'>Super Boss</div>
          </div>
          <ul className='mt-8 flex flex-wrap'>
            <li className='inline-block text-14 mr-3 mb-3'>
              <a className='leading-7 px-2 bg-[#202020] inline-block rounded-[4px]' href='#' title='title'>
                <img src="/images/icon/Badges01.svg" alt="title" className='inline-block mr-1'></img>10
              </a>
            </li>
            <li className='inline-block text-14 mr-3 mb-3'>
              <a className='leading-7 px-2 bg-[#202020] inline-block rounded-[4px]' href='#' title='title'>
                <img src="/images/icon/Badges02.svg" alt="title" className='inline-block mr-1'></img>10
              </a>
            </li>
            <li className='inline-block text-14 mr-3 mb-3'>
              <a className='leading-7 px-2 bg-[#202020] inline-block rounded-[4px]' href='#' title='title'>
                <img src="/images/icon/Badges03.svg" alt="title" className='inline-block mr-1'></img>10
              </a>
            </li>
            <li className='inline-block text-14 mr-3 mb-3'>
              <a className='leading-7 px-2 bg-[#202020] inline-block rounded-[4px]' href='#' title='title'>
                <img src="/images/icon/Badges04.svg" alt="title" className='inline-block mr-1'></img>10
              </a>
            </li>
            <li className='inline-block text-14 mr-3 mb-3'>
              <a className='leading-7 px-2 bg-[#202020] inline-block rounded-[4px]' href='#' title='title'>
                <img src="/images/icon/Badges05.svg" alt="title" className='inline-block mr-1'></img>10
              </a>
            </li>
            <li className='inline-block text-14 mr-3 mb-3'>
              <a className='leading-7 px-2 bg-[#202020] inline-block rounded-[4px]' href='#' title='title'>
                <img src="/images/icon/Badges06.svg" alt="title" className='inline-block mr-1'></img>10
              </a>
            </li>
            <li className='inline-block text-14 mr-3 mb-3'>
              <a className='leading-7 px-2 bg-[#202020] inline-block rounded-[4px]' href='#' title='title'>More</a>
            </li>
          </ul>
          <div className='editor-content mt-8'>
            <figure>
              <img src="/images/demo/demo02.png" alt="title" className=""></img>
            </figure>
            <p>
              Square Enix just announced during The Game Awards that FINAL FANTASY VII REMAKE INTERGRADE is coming to the PC. The classic RPG, 
              that was rebuilt from the ground-up and released on the PlayStation 4 and the PlayStation 5, will be arriving on the Epic Games Store on December 16. 
              That’s next week!
            </p> 
            <p>
              FINAL FANTASY VII REMAKE INTERGRADE brings both the main release and the FF7R EPISODE INTERmission DLC together in one package. 
              Players will <a href='#' title='title'>experience</a> the sprawling city of Midgar as Cloud Strife and his team battle to stop Shinra corporation from draining the world of its energy. 
            </p>
            <p>
              This isn’t a remaster, but a complete reimagining of the original game from the ground up. Rather than completely remaking the whole game, 
              the developers have focused all their attention on the opening city of Midgar, turning it into its own game for players to explore.
            </p>
            <figure>
              <img src="/images/demo/demo03.png" alt="title" className=""></img>
            </figure>
            <p>
              Square Enix just announced during The Game Awards that FINAL FANTASY VII REMAKE INTERGRADE is coming to the PC. The classic RPG, 
              that was rebuilt from the ground-up and released on the PlayStation 4 and the PlayStation 5, will be arriving on the Epic Games Store on December 16. 
              That’s next week!
            </p> 
            <p>
              FINAL FANTASY VII REMAKE INTERGRADE brings both the main release and the FF7R EPISODE INTERmission DLC together in one package. 
              Players will <a href='#' title='title'>experience</a> the sprawling city of Midgar as Cloud Strife and his team battle to stop Shinra corporation from draining the world of its energy. 
            </p>
            <p>
              This isn’t a remaster, but a complete reimagining of the original game from the ground up. Rather than completely remaking the whole game, 
              the developers have focused all their attention on the opening city of Midgar, turning it into its own game for players to explore.
            </p>
            <figure>
              <img src="/images/demo/demo02.png" alt="title" className=""></img>
            </figure>
            <p>
              Square Enix just announced during The Game Awards that FINAL FANTASY VII REMAKE INTERGRADE is coming to the PC. The classic RPG, 
              that was rebuilt from the ground-up and released on the PlayStation 4 and the PlayStation 5, will be arriving on the Epic Games Store on December 16. 
              That’s next week!
            </p> 
            <p>
              FINAL FANTASY VII REMAKE INTERGRADE brings both the main release and the FF7R EPISODE INTERmission DLC together in one package. 
              Players will <a href='#' title='title'>experience</a> the sprawling city of Midgar as Cloud Strife and his team battle to stop Shinra corporation from draining the world of its energy. 
            </p> 
          </div>
          <ul className='mt-8 text-14'>
            <li className='inline-block mr-3 mb-3'>
              <button className='leading-9 px-3 hover:bg-[#495057] bg-[#121212] rounded duration-200'><AiTwotoneLike className='inline-block mr-1.5'/>Like</button>
            </li>
            <li className='inline-block mr-3 mb-3'>
              <button className='leading-9 px-3 hover:bg-[#495057] bg-[#121212] rounded duration-200'><FaComment className='inline-block mr-1.5'/>Comment</button>
            </li>
            <li className='inline-block mr-3 mb-3'>
              <button className='leading-9 px-3 hover:bg-[#495057] bg-[#121212] rounded duration-200'><FaShareAlt className='inline-block mr-1.5'/>Share</button>
            </li>
            <li className='inline-block mr-3 mb-3'>
              <button className='leading-9 px-3 hover:bg-[#495057] bg-[#121212] rounded duration-200'><BsFillBookmarkFill className='inline-block mr-1.5'/>Save Favorite</button>
            </li>
          </ul>
          <div className='mt-8'>
            <div className='opacity-[0.47] mb-5'>
              <span className='mr-1'>179</span>Likes<span className='mx-4'>|</span><span className='mr-1'>14</span>Comments
            </div>
            <div className='relative md:pl-20 xxs:pl-14 mb-5 pb-5 border-b border-[#343a40] text-right'>
              <figure className='md:w-16 md:h-16 xxs:w-12 xxs:h-12 rounded-full overflow-hidden absolute left-0 top-0'>
                <img src="/images/demo/demo04.png" alt="title"></img>
              </figure>
              <textarea className='bg-121212 w-full h-22 rounded resize-none outline-none p-3 border border-[#343a40]' placeholder='Write your comment here...'></textarea>
              <button className='font-semibold leading-10 px-5 bg-blueCustom rounded'>Comment</button>
            </div>
            <div className='relative'>
              <ul className='relative'>
                <li className='relative md:pl-20 xxs:pl-10 mb-5 pb-5 border-b border-[#343a40]'>
                  <figure className='md:w-16 md:h-16 xxs:w-8 xxs:h-8 rounded-full overflow-hidden absolute left-0 top-0'>
                    <img src="/images/demo/demo04.png" alt="title"></img>
                  </figure>
                  <h5 className='text-14 font-semibold'>Billy The Buddy</h5>
                  <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                  <p className='opacity-[0.68] mt-3'>
                    Loving it...Extremely creative use of VR! You are actually playing a part in the Puzzles. They're just a lot of fun! 
                    I love puzzle games that are more fun than overly complicated...it makes for much less frustration and much more enjoyable and satisfying experience.
                  </p>
                  <div className='mt-3 text-14 text-right'>
                    <button className='leading-9 px-3 bg-[#121212] rounded duration-200 ml-3 focus:text-yellowCustom '><AiTwotoneLike className='inline-block mr-1.5'/>05</button>
                    <button className='leading-9 px-3 bg-[#121212] rounded duration-200 ml-3 focus:text-yellowCustom '><AiTwotoneDislike className='inline-block mr-1.5'/>01</button>
                  </div>
                </li>
                <li className='relative md:pl-20 xxs:pl-10 mb-5 pb-5 border-b border-[#343a40]'>
                  <figure className='md:w-16 md:h-16 xxs:w-8 xxs:h-8 rounded-full overflow-hidden absolute left-0 top-0'>
                    <img src="/images/demo/demo04.png" alt="title"></img>
                  </figure>
                  <h5 className='text-14 font-semibold'>Billy The Buddy</h5>
                  <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                  <p className='opacity-[0.68] mt-3'>
                    Loving it...Extremely creative use of VR! You are actually playing a part in the Puzzles. They're just a lot of fun! 
                    I love puzzle games that are more fun than overly complicated...it makes for much less frustration and much more enjoyable and satisfying experience.
                  </p>
                  <div className='mt-3 text-14 text-right'>
                    <button className='leading-9 px-3 bg-[#121212] rounded duration-200 ml-3 focus:text-yellowCustom '><AiTwotoneLike className='inline-block mr-1.5'/>05</button>
                    <button className='leading-9 px-3 bg-[#121212] rounded duration-200 ml-3 focus:text-yellowCustom '><AiTwotoneDislike className='inline-block mr-1.5'/>01</button>
                  </div>
                </li>
              </ul>
              <ul className='text-right text-14'>
                <li className='inline-block ml-2 text-center opacity-[0.68]'>Page:</li>
                <li className='inline-block ml-2 text-center'><a className='w-6 h-6 focus:bg-blueCustom hover:bg-blueCustom bg-121212 inline-block rounded duration-200' href='#' title='title'>1</a></li>
                <li className='inline-block ml-2 text-center'><a className='w-6 h-6 focus:bg-blueCustom hover:bg-blueCustom bg-121212 inline-block rounded duration-200' href='#' title='title'>2</a></li>
                <li className='inline-block ml-2 text-center'><a className='w-6 h-6 focus:bg-blueCustom hover:bg-blueCustom bg-121212 inline-block rounded duration-200' href='#' title='title'>3</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='xxs:w-full lg:w-4/12 2xl:w-5/12 px-4 mb-7'>
          <section className='bg-121212 rounded-lg xxs:mb-8 lg:mb-10'>
            <header className='p-5 border-b border-[#343a40]'>
              <h2 className='text-22 font-semibold leading-tight'>Highlight Articles</h2>
            </header>
            <div className='flex flex-wrap'>
                <article className='p-5 border-b border-[#343a40] w-full'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
                <article className='p-5 border-b border-[#343a40] w-full'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
                <article className='p-5 border-b border-[#343a40] w-full'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
                <article className='p-5 border-b border-[#343a40] w-full last:border-0'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
            </div>
          </section>
          <section className='bg-121212 rounded-lg xxs:mb-8 lg:mb-10'>
            <header className='p-5 border-b border-[#343a40]'>
              <h2 className='text-22 font-semibold leading-tight'>Recommended</h2>
            </header>
            <div className='flex flex-wrap'>
                <article className='p-5 border-b border-[#343a40] w-full'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
                <article className='p-5 border-b border-[#343a40] w-full'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
                <article className='p-5 border-b border-[#343a40] w-full'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
                <article className='p-5 border-b border-[#343a40] w-full last:border-0'>
                  <div className='flex flex-wrap'>
                    <figure className='xxs:w-full sm:w-4/12 lg:w-full xl:w-4/12 relative rounded-md overflow-hidden xxs:pt-[50%] sm:pt-[20%] lg:pt-[50%] xl:pt-[20%]'>
                        <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                          <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                        </a>
                    </figure>
                    <div className='xxs:w-full sm:w-8/12 lg:w-full xl:w-8/12  xxs:pl-0 sm:pl-5 lg:pl-0 xl:pl-5 xl:mt-0 xxs:mt-3'>
                      <h3 className='font-semibold leading-snug'>
                        <a className='hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                      </h3>
                      <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
                    </div>
                  </div>
                </article>
            </div>
          </section>
        </div>
      </section>
      <section className='xxs:mb-8 lg:mb-10'>
        <header className='mb-2'>
          <h2 className='text-28 font-semibold leading-tight'>Highlight Articles</h2>
        </header>
        <div className='flex flex-wrap mx-[-16px]'>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden group'>
              <figure className='relative xxs:pt-[50%] lg:pt-[62%]'>
                  <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                    <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                  </a>
              </figure>
              <div className='p-5'>
                <h3 className='font-semibold leading-snug'>
                  <a className='group-hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                </h3>
                <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
              </div>
            </div>
          </article>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden group'>
              <figure className='relative xxs:pt-[50%] lg:pt-[62%]'>
                  <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                    <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                  </a>
              </figure>
              <div className='p-5'>
                <h3 className='font-semibold leading-snug'>
                  <a className='group-hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                </h3>
                <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
              </div>
            </div>
          </article>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden group'>
              <figure className='relative xxs:pt-[50%] lg:pt-[62%]'>
                  <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                    <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                  </a>
              </figure>
              <div className='p-5'>
                <h3 className='font-semibold leading-snug'>
                  <a className='group-hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                </h3>
                <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
              </div>
            </div>
          </article>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden group'>
              <figure className='relative xxs:pt-[50%] lg:pt-[62%]'>
                  <a className='w-full h-full absolute left-0 top-0' href='#' title='title'>
                    <img className='w-full h-full object-cover' src="/images/demo/demo02.png" alt="title"></img>
                  </a>
              </figure>
              <div className='p-5'>
                <h3 className='font-semibold leading-snug'>
                  <a className='group-hover:text-blueCustom duration-200' href='#' title='title'>GateGame is going to Airdrop 5000 GG to 10 Lucky winners</a>
                </h3>
                <label className='text-12 flex items-center opacity-[0.47]'>10:30am 11/12/2021</label>
              </div>
            </div>
          </article>
        </div>
      </section>     
    </div>
  );
}   

NFTdetail.Layout = DefaultLayout
NFTdetail.LayoutProps = {
  title: 'NFTdetail',
}

export default NFTdetail;