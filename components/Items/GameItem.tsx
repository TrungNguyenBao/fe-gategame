import { Title2, Title6 } from '../Common/Title'
import React, { useMemo, useState } from 'react'
import ItemOverlayCover from './ItemOverlayCover'
import Link from 'next/link'
import { BsThreeDots, BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { Button } from '../shared/form/button'
import useDevice from '../../lib/hooks/useDevice'

const TAGS = ['MULTIVERSE', 'PLAY-TO-EARN', 'WIN-TO-EARN', 'FREE-TO-PLAY']

const GameItem: React.FC = () => {
  const [isViewMore, setIsViewMore] = useState<boolean>(false)
  const { isMobile } = useDevice()

  const showDefaultTags = useMemo(() => {
    return isMobile ? TAGS.slice(0, 2) : TAGS
  }, [isMobile])

  return (
    <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden mt-[60px] first:mt-[unset] ">
      <div className="relative lg:w-[60%] w-full ">
        <a href="#">
          <img
            className="w-full h-full"
            src="https://cdn.gategame.io/storage/upload/product/80r9evZwYYsf2kYc6vVcdZvcHrrzBUbFDpXlDkEd.png?w=877&amp;auto=compress,format"
          />
          <ItemOverlayCover />
        </a>
      </div>
      <div className="relative lg:w-[40%] w-full bg-[#121212]">
        <div className="px-[20px] py-[10px] lg:px-[30px] lg:py-[20px]">
          <div className="flex flex-col">
            <div className="max-w-[100px] text-center px-[6px] py-[2px] font-normal text-[#fff] text-[14px] bg-[#006dff]">
              <Link href="#">Visit Website</Link>
            </div>

            <div className="flex my-[10px]">
              <img
                src="/images/icon/ic_Web.svg"
                alt="web-icon"
                className="mr-[8px]"
              />
              <img
                src="/images/icon/ic_Android.svg"
                alt="web-icon"
                className="mr-[8px]"
              />
            </div>
            <Title2 className="mt-[4px] text-[36px]">
              <Link href="#"> Stellaverse: ARENA</Link>
            </Title2>

            <div className="mt-[24px] flex flex-col">
              <span className="text-[14px] text-[#ffffff78]">Genre</span>
              <div className="flex flex-wrap">
                {showDefaultTags.map((tag) => {
                  return (
                    <Button
                      href="#"
                      className="mr-[12px] mb-[10px] border-[1px] border-solid border-[#6cb6f4] text-[#6cb6f4] px-[6px] py-[2px] hover:text-[#fff] hover:bg-[#6cb6f4] text-[12px] md:text-[14px] rounded-[2px] font-normal h-6"
                    >
                      {tag}
                    </Button>
                  )
                })}
                <Button
                  className="bg-[#202020] border-[#202020] text-white px-[5px] py-[5px] flex items-center h-6 text-14 font-normal"
                  onClick={() => setIsViewMore((prevState) => !prevState)}
                >
                  More
                  {isViewMore ? (
                    <BsChevronUp className="ml-[5px]" />
                  ) : (
                    <BsChevronDown className="ml-[5px]" />
                  )}
                </Button>
              </div>
              {isViewMore && (
                <div className="mt-[10px]">
                  <Button
                    className="mr-[12px] border-[1px] border-solid border-[#6cb6f4] text-[#6cb6f4] px-[6px] py-[2px] hover:text-[#fff] hover:bg-[#6cb6f4] text-[12px] md:text-[14px] rounded-[2px] font-normal h-6"
                    href="#"
                  >
                    FREE-TO-PLAY
                  </Button>
                </div>
              )}
            </div>

            <div className="flex flex-col my-[24px]">
              <span className="text-[14px] text-[#ffffff78]">
                Development Status
              </span>
              <p className="text-[16px] text-[#fff] font-normal leading-[26px] mt-[5px] mb-[20px]">
                In Development
              </p>

              <div className="flex">
                <div className="flex flex-row bg-[#202020] px-[6px] py-[3px] items-center justify-center rounded-[4px] mr-[10px]">
                  <span className="mr-[8px]">1</span>
                  <img
                    src="https://cdn.gategame.io/storage/upload/medal/mqJPJbvV47QY6rQcxXqtbWiJBBen3ihKBbJtlRYd.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>

                <div className="flex flex-row bg-[#202020] px-[6px] py-[3px] items-center justify-center rounded-[4px] mr-[10px]">
                  <span className="mr-[8px]">2</span>
                  <img
                    src="https://cdn.gategame.io/storage/upload/medal/hywvVOJJkfCFx3TVc9JaL0tAOAPsXVatPStK7ywu.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>

                <div className="flex flex-row bg-[#202020] px-[6px] py-[3px] items-center justify-center rounded-[4px] mr-[10px]">
                  <span className="mr-[8px]">3</span>
                  <img
                    src="https://cdn.gategame.io/storage/upload/medal/XHxfcHPKFvmyf8Id7FXHsBzTf96ZvAPBOyWcJcuz.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center ">
              <Button className="bg-[#006dff] hover:bg-[#0a85ed] hover:text-[#fff] text-[16px] leading-[24px] px-[54px] py-[11px] text-[#fff] mr-[20px]">
                Visit Store
              </Button>
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameItem
