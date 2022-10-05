import React from 'react';
import BackButton from '../../components/shared/BackButton';
import { BsFillSuitDiamondFill, BsChevronLeft, BsBoxArrowUpRight, BsArrowRightCircleFill} from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt, AiOutlineFlag, AiFillWindows, AiFillApple, AiFillCaretDown} from 'react-icons/ai'
import { DefaultLayout } from '../../layouts/default-layout/default-layout';

const NFTdetail = () => {
  return (
    <div className='lg:px-[30px] xxs:px-[15px]'>
      <BackButton />
      <section className='flex flex-wrap'>
        <div className='xxs:w-full lg:w-4/12 mb-7'>Slide Photo for here</div>

        <div className='xxs:w-full lg:w-8/12 lg:pl-8 xxs:pl-0 mb-7'>
          <div className='mb-2 inline-block'>
            <span className='flex bg-violetCustom py-1 px-2 font-semibold rounded items-center'>
              <BsFillSuitDiamondFill className='inline-block mr-1'/>Mythic
            </span>
          </div>
          <h1 className='text-36 font-semibold   mb-1 leading-tight'>Potion Full Power: The Super Stronghands</h1>
          <label className='text-14  '><AiFillHeart className='inline-block mr-1 text-blue'/><span className='opacity-[0.48]'>19 favourites</span></label>
          <div className='pl-16 relative mt-5 min-h-14'>
              <figure className='absolute left-0'>
                <img src="/images/icon/Game-ava.png"  alt="title" className="w-12 h-12"></img>
              </figure>
              <div>
                <h3 className='font-semibold text-16'>Crysis: Remastered Trilogy</h3>
                <p className='opacity-[0.47] text-14'><span>303k</span> Followers</p>
              </div>
            </div>
          <p className='text-16  opacity-[0.48] leading-snug mt-5'>Abstract Expressionist Version is a kind of interpretation of project "Venetian Masked Robot" Series, which we produced with artist "ZIRTAPOZ". Many light years in the future, perhaps robots have used other accessories to gain personality and socialize like humans. In this series, I will generate step by step Venetian Masked Robots as profile with their assets & accessories.</p>
          <div className='mt-5'>
            <label className='text-14 font-semibold  mb-2 block'>Current Price</label>
            <div className='items-center bg-121212 lg:inline-block xxs:block lg:text-left xxs:text-center p-3 rounded-lg'>
              <figure className='mr-2 inline-block'><img className="h-5 w-5" src="/images/icon/ggwp.svg"></img></figure>
              <span className='text-28 font-semibold leading-tight'>0.1 ETH <b className='opacity-[0.68] text-16 font-normal ml-1'>($330.26)</b></span>
            </div>
          </div>
          <div className='xxs:mt-5 lg:mt-10 flex flex-wrap items-center'>
            <button className='xxs:w-full lg:w-6/12 font-semibold text-18  bg-blueCustom rounded leading-[52px] mb-5'>Buy Now</button>
            <ul className='xxs:w-full lg:w-6/12 lg:pl-2 xxs:pl-0 flex mb-5 justify-center'>
              <li className='pr-3 pl-3 group text-center'>
                <a className="w-[52px] h-[52px] rounded-full group-hover:border-blueCustom inline-block border border-white leading-[52px] duration-200" href='#' title='title'>
                  <AiOutlineHeart className='inline-block text-24 group-hover:text-blueCustom duration-200'/>
                </a>
              </li>
              <li className='pr-3 pl-3 group text-center'>
                <a className="w-[52px] h-[52px] rounded-full group-hover:border-blueCustom inline-block border border-white leading-[52px] duration-200" href='#' title='title'>
                  <AiOutlineShareAlt className='inline-block text-24 group-hover:text-blueCustom duration-200'/>
                </a>
              </li>
              <li className='pr-3 pl-3 group text-center'>
                <a className="w-[52px] h-[52px] rounded-full group-hover:border-blueCustom inline-block border border-white leading-[52px] duration-200" href='#' title='title'>
                  <AiOutlineFlag className='inline-block text-24 group-hover:text-blueCustom duration-200'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='bg-121212 rounded-lg xxs:mb-8 lg:mb-14'>
        <header className='p-5 border-b border-[#343a40]'>
          <h2 className='text-22 font-semibold leading-tight'>Properties</h2>
        </header>
        <div className='flex flex-wrap'>
            <article className='xxs:w-full xs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 xxs:p-4 xl:p-5'>
              <div className='bg-[#030303] p-5 rounded-lg border border-[#343a40]'>
                <h3 className='text-22 font-semibold text-blueCustom uppercase mb-2'>GOD</h3>
                <label className='block text-16 mb-2 font-semibold'>Death</label>
                <p className=' opacity-[0.68] mb-2 last:mb-0'>10% have this trait</p>
              </div>
            </article>
            <article className='xxs:w-full xs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 xxs:p-4 xl:p-5'>
              <div className='bg-[#030303] p-5 rounded-lg border border-[#343a40]'>
                <h3 className='text-22 font-semibold text-blueCustom uppercase mb-2'>Name</h3>
                <label className='block  text-16 mb-2 font-semibold'>Death</label>
                <p className=' opacity-[0.68] mb-2 last:mb-0'>10% have this trait</p>
              </div>
            </article>
            <article className='xxs:w-full xs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 xxs:p-4 xl:p-5'>
              <div className='bg-[#030303] p-5 rounded-lg border border-[#343a40]'>
                <h3 className='text-22 font-semibold text-blueCustom uppercase mb-2'>QUALITY</h3>
                <label className='block  text-16 mb-2 font-semibold'>Death</label>
                <p className=' opacity-[0.68] mb-2 last:mb-0'>10% have this trait</p>
              </div>
            </article>
            <article className='xxs:w-full xs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 xxs:p-4 xl:p-5'>
              <div className='bg-[#030303] p-5 rounded-lg border border-[#343a40]'>
                <h3 className='text-22 font-semibold text-blueCustom uppercase mb-2'>RARITY</h3>
                <label className='block  text-16 mb-2 font-semibold'>Death</label>
                <p className='opacity-[0.68] mb-2 last:mb-0'>10% have this trait</p>
              </div>
            </article>
            <article className='xxs:w-full xs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 xxs:p-4 xl:p-5'>
              <div className='bg-[#030303] p-5 rounded-lg border border-[#343a40]'>
                <h3 className='text-22 font-semibold text-blueCustom uppercase mb-2'>set</h3>
                <label className='block text-16 mb-2 font-semibold'>Death</label>
                <p className='opacity-[0.68] mb-2 last:mb-0'>10% have this trait</p>
              </div>
            </article>
            <article className='xxs:w-full xs:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 xxs:p-4 xl:p-5'>
              <div className='bg-[#030303] p-5 rounded-lg border border-[#343a40]'>
                <h3 className='text-22 font-semibold text-blueCustom uppercase mb-2'>TYPE</h3>
                <label className='block text-16 mb-2 font-semibold'>Death</label>
                <p className='opacity-[0.68] mb-2 last:mb-0'>10% have this trait</p>
              </div>
            </article>
        </div>
      </section>

      <section className='bg-121212 rounded-lg xxs:mb-8 lg:mb-14'>
        <header className='p-5 border-b border-[#343a40]'>
          <h2 className='text-22 font-semibold leading-tight'>Games</h2>
        </header>
        <div className='flex flex-wrap'>
          <article className='xxs:w-full md:w-6/12 p-5'>
            <div className='pl-16 relative min-h-14'>
              <figure className='absolute left-0'>
                <img src="/images/icon/Game-ava.png"  alt="title" className="w-12 h-12"></img>
              </figure>
              <div>
                <h3 className='font-semibold text-16'>Crysis: Remastered Trilogy</h3>
                <p className='opacity-[0.47] text-14'><span>303k</span> Followers</p>
              </div>
            </div>
            <p className='text-16 opacity-[0.68] leading-snug mt-3'>
              Crysis Remastered Trilogy includes each of the single-player campaigns from the legendary first-person shooters Crysis, Crysis 2, and Crysis 3, optimized for today's hardware.
            </p>
            <div className='flex flex-wrap items-center mt-5'>
              <div className='flex flex-wrap items-center mr-5 mb-3'>
                <figure className='mr-1'>
                  <img src="/images/icon/blockchain-1.png"  alt="title" className="w-4 h-4"></img>
                </figure>
                <span className='opacity-[0.47] text-14'>Binance</span>
              </div>
              <ul className='text-14 mr-5 mb-3'>
                <li className='px-1 inline-block'><a className='text-blueCustom border inline-block border-blueCustom py-0.5 px-2' href='#' title='title'>free2play</a></li>
                <li className='px-1 inline-block'><a className='text-blueCustom border inline-block border-blueCustom py-0.5 px-2' href='#' title='title'>play2earn</a></li>
                <li className='px-1 inline-block'><a className='text-blueCustom border inline-block border-blueCustom py-0.5 px-2' href='#' title='title'>win2earn</a></li>
              </ul>
              <ul className='items-center mb-3 flex flex-wrap'>
                <li className='px-1'>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200' href='#' title='title'><AiFillWindows className='text-20'/></a>
                </li>
                <li className='px-1'>
                  <a className='opacity-[0.47] hover:opacity-100 duration-200' href='#' title='title'><AiFillApple className='text-20'/></a>
                </li>
              </ul>
            </div>
          </article>
          <article className='xxs:w-full md:w-6/12 p-5'>
            <div className='flex flex-wrap items-center xxs:mb-5 lg:mb-10'>
              <span className='text-22 font-semibold bg-greenCustom rounded-lg px-4 leading-10 mr-3'>8.4</span>
              <span className='text-14 opacity-[0.47]'>48 Reviews</span>
            </div>
            <div className='flex flex-wrap items-center xxs:mb-5 lg:mb-10'>
              <span className='text-22 font-semibold bg-[#343A40] rounded-lg px-4 leading-10 mr-3'>8.4</span>
              <span className='text-14 opacity-[0.47]'>Social Score</span>
            </div>
            <ul className='flex flex-wrap'>
              <li className='inline-block text-14 mr-3 mb-3'>
                <a className='leading-7 px-2 bg-[#202020] inline-block rounded' href='#' title='title'>
                  <img src="/images/icon/Badges01.svg" alt="title" className='inline-block mr-1'></img>10
                </a>
              </li>
              <li className='inline-block text-14 mr-3 mb-3'>
                <a className='leading-7 px-2 bg-[#202020] inline-block rounded' href='#' title='title'>
                  <img src="/images/icon/Badges02.svg" alt="title" className='inline-block mr-1'></img>10
                </a>
              </li>
              <li className='inline-block text-14 mr-3 mb-3'>
                <a className='leading-7 px-2 bg-[#202020] inline-block rounded' href='#' title='title'>
                  <img src="/images/icon/Badges03.svg" alt="title" className='inline-block mr-1'></img>10
                </a>
              </li>
              <li className='inline-block text-14 mr-3 mb-3'>
                <a className='leading-7 px-2 bg-[#202020] inline-block rounded' href='#' title='title'>
                  <img src="/images/icon/Badges04.svg" alt="title" className='inline-block mr-1'></img>10
                </a>
              </li>
              <li className='inline-block text-14 mr-3 mb-3'>
                <a className='leading-7 px-2 bg-[#202020] inline-block rounded' href='#' title='title'>
                  <img src="/images/icon/Badges05.svg" alt="title" className='inline-block mr-1'></img>10
                </a>
              </li>
              <li className='inline-block text-14 mr-3 mb-3'>
                <a className='leading-7 px-2 bg-[#202020] inline-block rounded' href='#' title='title'>
                  <img src="/images/icon/Badges06.svg" alt="title" className='inline-block mr-1'></img>10
                </a>
              </li>
              <li className='inline-block text-14 mr-3 mb-3'>
                <a className='leading-7 px-2 bg-[#202020] inline-block rounded' href='#' title='title'>More</a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <div className='xxs:mb-0 lg:mb-14 flex flex-wrap mx-[-16px]'>
        <section className='px-4 xxs:w-full md:w-6/12 xxs:mb-8 lg:mb-0'>
          <div className='bg-121212 rounded-lg h-full'>
            <header className='p-5 border-b border-[#343a40]'>
              <h2 className='text-22 font-semibold leading-tight'>Level</h2>
            </header>
            <div className='px-5 py-12'>
              <div className='relative bg-[#495057] h-3 rounded-md'>
                <div className='bg-linear2D8 h-full rounded-md w-1/3'></div>
                <span className='absolute left-0 bottom-5'>Credit</span>
                <span className='opacity-[0.68] absolute right-0 bottom-5'>3 of 15</span>
              </div>
            </div>
          </div>
        </section>
        <section className='px-4 xxs:w-full md:w-6/12 xxs:mb-8 lg:mb-0'>
          <div className='bg-121212 rounded-lg h-full'>
            <header className='p-5 border-b border-[#343a40] relative'>
              <h2 className='text-22 font-semibold leading-tight'>Price History</h2>
              <div className='bg-[#030303] p-2 rounded-lg border border-[#343a40] absolute right-5 top-3.5 xxs:w-2/5 lg:w-1/4 cursor-pointer pr-8'>
                <AiFillCaretDown className='text-14 absolute right-3 top-3.5'/>
                <div className='block overflow-ellipsis text-14 whitespace-nowrap overflow-hidden'>All Time</div>
                <ul className='bg-[#030303] rounded-lg border border-[#343a40] absolute left-0 top-[100%] w-full text-14 py-2'>
                  <li className='cursor-pointer opacity-[0.47] hover:opacity-100 duration-200 px-2 py-1'>Fillter 01</li>
                  <li className='cursor-pointer opacity-[0.47] hover:opacity-100 duration-200 px-2 py-1'>Fillter 02</li>
                  <li className='cursor-pointer opacity-[0.47] hover:opacity-100 duration-200 px-2 py-1'>Fillter 03</li>
                </ul>
              </div>
            </header>
            <div className='p-5'>
              N/a
            </div>
          </div>
        </section>
      </div>

      <div className='xxs:mb-0 xl:mb-14 flex flex-wrap mx-[-16px]'>
        <section className='px-4 xxs:w-full xl:w-6/12 xxs:mb-8 xl:mb-0'>
          <div className='bg-121212 rounded-lg h-full overflow-hidden'>
            <header className='p-5 border-b border-[#343a40]'>
              <h2 className='text-22 font-semibold leading-tight'>Offers</h2>
            </header>
            <table className="table-dict w-full">
              <thead className="text-12 opacity-[0.68] border-b border-[#343a40] text-left">
                <tr>
                  <th scope="col" className='px-3 py-4 w-1/4'>Price</th>
                  <th scope="col" className='px-3 py-4 w-1/4'>USD Price</th>
                  <th scope="col" className='px-3 py-4 w-1/4'>Expiration</th>
                  <th scope="col" className='px-3 py-4 w-1/4'>From</th>
                </tr>
              </thead>
              <tbody>
                <tr className='table-row-dict border-t border-[#343a40]'>
                  <td data-label="Price:" className='px-3 py-4'>
                    <div className='lg:flex xxs:inline-block items-center'>
                      <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                    </div>
                  </td>
                  <td data-label="USD Price:" className='px-3 py-4'>$103.27</td>
                  <td data-label="Expiration:" className='px-3 py-4'>21 Dec 2021</td>
                  <td data-label="From:" className='px-3 py-4'>Gwenzy</td>
                </tr>
                <tr className='table-row-dict border-t border-[#343a40]'>
                  <td data-label="Price:" className='px-3 py-4'>
                    <div className='lg:flex xxs:inline-block items-center'>
                      <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                    </div>
                  </td>
                  <td data-label="USD Price:" className='px-3 py-4'>$100.27</td>
                  <td data-label="Expiration:" className='px-3 py-4'>21 Dec 2021</td>
                  <td data-label="From:" className='px-3 py-4'>Dylan</td>
                </tr>
                <tr className='table-row-dict border-t border-[#343a40]'>
                  <td data-label="Price:" className='px-3 py-4'>
                    <div className='lg:flex xxs:inline-block items-center'>
                      <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                    </div>
                  </td>
                  <td data-label="USD Price:" className='px-3 py-4'>$103.27</td>
                  <td data-label="Expiration:" className='px-3 py-4'>21 Dec 2021</td>
                  <td data-label="From:" className='px-3 py-4'>Gwenzy</td>
                </tr>
              </tbody>
            </table>
            <div className='uppercase px-3 py-4 border-t border-[#343a40] xxs:text-center lg:text-left'>
              <button className='leading-10 px-5 border border-white rounded-md font-semibold  text-14'>MAKE OFFER</button>
            </div>
          </div>
        </section>
        <section className='px-4 xxs:w-full xl:w-6/12 xxs:mb-8 xl:mb-0'>
          <div className='bg-121212 rounded-lg h-full overflow-hidden'>
            <header className='p-5 border-b border-[#343a40]'>
              <h2 className='text-22 font-semibold leading-tight'>Listings</h2>
            </header>
            <table className="table-dict w-full">
              <thead className="text-12 opacity-[0.68] border-b border-[#343a40] text-left">
                <tr>
                  <th scope="col" className='px-3 py-4 w-1/4'>Price</th>
                  <th scope="col" className='px-3 py-4 w-1/4'>USD Price</th>
                  <th scope="col" className='px-3 py-4 w-1/4'>Expiration</th>
                  <th scope="col" className='px-3 py-4 w-1/4'>From</th>
                </tr>
              </thead>
              <tbody>
                <tr className='table-row-dict border-t border-[#343a40]'>
                  <td data-label="Price:" className='px-3 py-4'>
                    <div className='lg:flex xxs:inline-block items-center'>
                      <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                    </div>
                  </td>
                  <td data-label="USD Price:" className='px-3 py-4'>$103.27</td>
                  <td data-label="Expiration:" className='px-3 py-4'>--</td>
                  <td data-label="From:" className='px-3 py-4'>Gwenzy</td>
                </tr>
                <tr className='table-row-dict border-t border-[#343a40]'>
                  <td data-label="Price:" className='px-3 py-4'>
                    <div className='lg:flex xxs:inline-block items-center'>
                      <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                    </div>
                  </td>
                  <td data-label="USD Price:" className='px-3 py-4'>$103.27</td>
                  <td data-label="Expiration:" className='px-3 py-4'>--</td>
                  <td data-label="From:" className='px-3 py-4'>Gwenzy</td>
                </tr>
                <tr className='table-row-dict border-t border-[#343a40]'>
                  <td data-label="Price:" className='px-3 py-4'>
                    <div className='flg:flex xxs:inline-block items-center'>
                      <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                    </div>
                  </td>
                  <td data-label="USD Price:" className='px-3 py-4'>$100.27</td>
                  <td data-label="Expiration:" className='px-3 py-4'>--</td>
                  <td data-label="From:" className='px-3 py-4'>Dylan</td>
                </tr>
                <tr className='table-row-dict border-t border-[#343a40]'>
                  <td data-label="Price:" className='px-3 py-4'>
                    <div className='lg:flex xxs:inline-block items-center'>
                      <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                    </div>
                  </td>
                  <td data-label="USD Price:" className='px-3 py-4'>$103.27</td>
                  <td data-label="Expiration:" className='px-3 py-4'>--</td>
                  <td data-label="From:" className='px-3 py-4'>Gwenzy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className='bg-121212 rounded-lg xxs:mb-8 lg:mb-14 overflow-hidden'>
        <header className='p-5 border-b border-[#343a40]'>
          <h2 className='text-22 font-semibold leading-tight'>Trading History</h2>
        </header>
        <table className="table-dict w-full">
          <thead className="text-12 opacity-[0.68] border-b border-[#343a40] text-left">
            <tr>
              <th scope="col" className='px-3 py-4 w-2/12'>Event</th>
              <th scope="col" className='px-3 py-4 w-2/12'>Price</th>
              <th scope="col" className='px-3 py-4 w-2/12'>From</th>
              <th scope="col" className='px-3 py-4 w-2/12'>To</th>
              <th scope="col" className='px-3 py-4 w-2/12'>Date</th>
              <th scope="col" className='px-3 py-4 w-2/12'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-row-dict border-t border-[#343a40]'>
              <td data-label="Event:" className='px-3 py-4'>Offered</td>
              <td data-label="Price:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                </div>
              </td>
              <td data-label="From:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <img className="h-8 w-8 inline-block mr-2 rounded-full" src="/images/icon/Game-ava.png"></img>Billy
                </div>
              </td>
              <td data-label="To:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <img className="h-8 w-8 inline-block mr-2 rounded-full" src="/images/icon/Game-ava.png"></img>Esther Howard
                </div>
              </td>
              <td data-label="Date:" className='px-3 py-4'>21 Dec 2021</td>
              <td data-label="Status:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <span className='text-12 font-semibold leading-6 bg-[#FF9100] pl-3 pr-3 inline-block rounded-full'>Pending</span>
                  <button className='inline-block ml-3 opacity-[0.47] hover:opacity-100 duration-200'><BsBoxArrowUpRight/></button>
                </div>
              </td>
            </tr>
            <tr className='table-row-dict border-t border-[#343a40]'>
              <td data-label="Event:" className='px-3 py-4'>Offered</td>
              <td data-label="Price:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg"></img>1,900.00 GG
                </div>
              </td>
              <td data-label="From:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <img className="h-8 w-8 inline-block mr-2 rounded-full" src="/images/icon/Game-ava.png"></img>Billy
                </div>
              </td>
              <td data-label="To:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <img className="h-8 w-8 inline-block mr-2 rounded-full" src="/images/icon/Game-ava.png"></img>Esther Howard
                </div>
              </td>
              <td data-label="Date:" className='px-3 py-4'>21 Dec 2021</td>
              <td data-label="Status:" className='px-3 py-4'>
                <div className='lg:flex xxs:inline-block items-center'>
                  <span className='text-12 font-semibold leading-6 bg-[#20BF55] pl-3 pr-3 inline-block rounded-full'>Completed</span>
                  <button className='inline-block ml-3 opacity-[0.47] hover:opacity-100 duration-200'><BsBoxArrowUpRight/></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='xxs:mb-8 lg:mb-14 last:mb-0'>
        <header className='mb-2'>
          <h2 className='text-28 font-semibold leading-tight'>
            <span>You May Also Like</span>
            <a className='text-14 text-blueCustom font-semibold ml-2 float-right mt-2 flex items-center' href='#' title='title'>
              <span className='xxs:hidden md:block'>Browse more NFTs</span><BsArrowRightCircleFill className='xxs:block md:hidden ml-2 xxs:text-22 md:text-16'/>
            </a>
          </h2>
        </header>
        <div className='flex flex-wrap mx-[-16px]'>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden h-full relative pb-[60px]'>
              <span className='bg-[#030303] py-0.5 px-2 font-semibold rounded text-12 absolute left-5 top-5 z-10 text-yellowCustom '>
                <BsFillSuitDiamondFill className='inline-block mr-1'/>Rare
              </span>
              <figure className='pt-[82%] relative bg-linear626'>
                <a href='#' title='title' className='absolute left-0 top-0 w-full h-full text-center'>
                  <img className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" src="/images/demo/demo01.svg" alt='title'></img>
                </a>
              </figure>
              <div className='p-5'>
                <label className='block text-12 opacity-[0.68]'>Crysis Remastered Trilogy</label>
                <header className='mb-4'>
                  <h3 className='font-semibold leading-snug'><a href='#' title='title'>Potion Full Power: The Super Stronghands 2022</a></h3>
                </header>
                <div className='flex items-center'>
                  <div className='w-6/12 text-left items-center flex'>
                    <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg" alt='title'></img>1,900.00 GG
                  </div>
                  <div className='w-6/12 text-right'>
                    <span className='opacity-[0.68] text-12 mr-2'>Required Level</span> 
                    <span className='text-14 opacity-100 font-semibold'>17</span>
                  </div>
                </div>
              </div>
              <button className='w-[calc(100%-40px)] uppercase leading-10 px-3 text-14 font-semibold text-blueCustom bg-[#2B3035] rounded absolute bottom-5 left-5'>BUY NOW</button>
            </div>
          </article>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden h-full relative pb-[60px]'>
              <span className='bg-[#030303] py-0.5 px-2 font-semibold rounded text-12 absolute left-5 top-5 z-10 text-violet'>
                <BsFillSuitDiamondFill className='inline-block mr-1'/>Mythic
              </span>
              <figure className='pt-[82%] relative bg-linear626'>
                <a href='#' title='title' className='absolute left-0 top-0 w-full h-full text-center'>
                  <img className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" src="/images/demo/demo01.svg" alt='title'></img>
                </a>
              </figure>
              <div className='p-5'>
                <label className='block text-12 opacity-[0.68]'>Crysis Remastered Trilogy</label>
                <header className='mb-4'>
                  <h3 className='font-semibold leading-snug'><a href='#' title='title'>Potion Full Power: The Super Stronghands 2022</a></h3>
                </header>
                <div className='flex items-center'>
                  <div className='w-6/12 text-left items-center flex'>
                    <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg" alt='title'></img>1,900.00 GG
                  </div>
                  <div className='w-6/12 text-right'>
                    <span className='opacity-[0.68] text-12 mr-2'>Required Level</span> 
                    <span className='text-14 opacity-100 font-semibold'>17</span>
                  </div>
                </div>
              </div>
              <button className='w-[calc(100%-40px)] uppercase leading-10 px-3 text-14 font-semibold text-blueCustom bg-[#2B3035] rounded absolute bottom-5 left-5'>BUY NOW</button>
            </div>
          </article>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden h-full relative pb-[60px]'>
              <span className='bg-[#030303] py-0.5 px-2 font-semibold rounded text-12 absolute left-5 top-5 z-10 text-yellowCustom '>
                <BsFillSuitDiamondFill className='inline-block mr-1'/>Rare
              </span>
              <figure className='pt-[82%] relative bg-linear626'>
                <a href='#' title='title' className='absolute left-0 top-0 w-full h-full text-center'>
                  <img className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" src="/images/demo/demo01.svg" alt='title'></img>
                </a>
              </figure>
              <div className='p-5'>
                <label className='block text-12 opacity-[0.68]'>Crysis Remastered Trilogy</label>
                <header className='mb-4'>
                  <h3 className='font-semibold leading-snug'><a href='#' title='title'>Potion Full Power: The Super Stronghands 2022</a></h3>
                </header>
                <div className='flex items-center'>
                  <div className='w-6/12 text-left items-center flex'>
                    <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg" alt='title'></img>1,900.00 GG
                  </div>
                  <div className='w-6/12 text-right'>
                    <span className='opacity-[0.68] text-12 mr-2'>Required Level</span> 
                    <span className='text-14 opacity-100 font-semibold'>17</span>
                  </div>
                </div>
              </div>
              <button className='w-[calc(100%-40px)] uppercase leading-10 px-3 text-14 font-semibold text-blueCustom bg-[#2B3035] rounded absolute bottom-5 left-5'>BUY NOW</button>
            </div>
          </article>
          <article className='xxs:w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-4'>
            <div className='bg-121212 rounded-lg overflow-hidden h-full relative pb-[60px]'>
              <span className='bg-[#030303] py-0.5 px-2 font-semibold rounded text-12 absolute left-5 top-5 z-10 text-violet'>
                <BsFillSuitDiamondFill className='inline-block mr-1'/>Mythic
              </span>
              <figure className='pt-[82%] relative bg-linear626'>
                <a href='#' title='title' className='absolute left-0 top-0 w-full h-full text-center'>
                  <img className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" src="/images/demo/demo01.svg" alt='title'></img>
                </a>
              </figure>
              <div className='p-5'>
                <label className='block text-12 opacity-[0.68]'>Crysis Remastered Trilogy</label>
                <header className='mb-4'>
                  <h3 className='font-semibold leading-snug'><a href='#' title='title'>Potion Full Power: The Super Stronghands 2022</a></h3>
                </header>
                <div className='flex items-center'>
                  <div className='w-6/12 text-left items-center flex'>
                    <img className="h-5 w-5 inline-block mr-2" src="/images/icon/ggwp.svg" alt='title'></img>1,900.00 GG
                  </div>
                  <div className='w-6/12 text-right'>
                    <span className='opacity-[0.68] text-12 mr-2'>Required Level</span> 
                    <span className='text-14 opacity-100 font-semibold'>17</span>
                  </div>
                </div>
              </div>
              <button className='w-[calc(100%-40px)] uppercase leading-10 px-3 text-14 font-semibold text-blueCustom bg-[#2B3035] rounded absolute bottom-5 left-5'>BUY NOW</button>
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