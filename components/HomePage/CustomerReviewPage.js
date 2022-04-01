import React from 'react'
import Image from 'next/image'

function CustomerReviewPage() {
  return (
    <div className="snap-fullPage flex h-full flex-col  items-center  ">
      <div className=" m4-8 mb-[16px]] center-heading mx-8   h-[107px] w-auto   text-center text-2xl font-bold lg:mt-0 lg:text-4xl ">
        REVIEWS FROM OUR <span className=" text-[#FC4D6D]">CUSTOMERS</span>
      </div>
      <div className="relative">
        <Cart /> <Circles />
      </div>
    </div>
  )
}

function Circles() {
  return (
    <div className="-z-10 scale-[.8] lg:scale-100  ">
      {/* left top */}
      <div className=" gradientCircle bottom-[33rem]    left-[-2rem]  h-[97.67px]     w-[97.67px] md:bottom-[15rem] " />
      {/* left bottom */}
      <div className=" gradientCircle  bottom-[-1rem] -left-1 h-[48.95px]  w-[49.04px] md:left-[4rem]" />
      {/* top right */}
      <div className=" gradientCircle -right-4 bottom-[28rem] h-[31.82px]  w-[31.88px]    md:bottom-[16rem]   md:right-[20rem]">
        22
      </div>
      {/*  right bottom */}
      <div className=" gradientCircle -right-4 -bottom-4   h-[150px] w-[150px]  md:right-[-3.3rem]  md:-bottom-20 lg:flex  lg:h-[200px] lg:w-[200px]" />
    </div>
  )
}
function Cart() {
  return (
    <>
      <div className="  transparent-box relative z-50 mx-8  rounded-2xl ">
        <div
          className="  transparent-shadow z-50
    flex flex-col  gap-[34px] rounded-[22px] px-4 py-7 md:py-9  md:px-8 "
        >
          <div className=" ml-[2rem] flex items-center gap-4  ">
            <div className="relative  h-[70px] w-[70px] lg:h-[88px] lg:w-[88px]">
              <Image
                src="/Images/CustomerReview/man-smile-ellipse-43.png"
                // priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8L8HQAwAE2gGloQWaFwAAAABJRU5ErkJggg=="
                // width={112}
                // height={112}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div>
              <div className=" !text-sm font-semibold text-[#2E2E2E] lg:text-2xl ">
                Andrew Holt
              </div>
              <div className="text-sm capitalize text-[#828282] lg:text-2xl">
                graphics123@gmail.com
              </div>
            </div>
          </div>
          <p className=" flex font-monts    text-[18px] capitalize leading-[26px] text-[#272727] ">
            <div className="mr-[9px] -mt-4  inline-block min-h-[27px] min-w-[32px] self-baseline  ">
              <Image
                src="/Images/CustomerReview/“.svg"
                height={27}
                width={32}
                alt=""
              />
            </div>
            <span className=" mr-4 inline-block max-w-[907px]  text-xs font-semibold leading-6 tracking-wide lg:text-base ">
              {`I had been dreaming to learn guitar for 4 yrs. One day I visited
        Peppertree.com. I clicked "Buy a Trial Session". Later all happened
        automatically, I kept attending the amazing tutor online and she kept
        me motivated. It's been 4 weeks & 40 sessions. And woohoo! I just
        surprised all my friends at a party with my skills! Stop desiring a
        skill, just start with Peppertree!`}
              <div className="  float-right  mt-4   inline-block  justify-self-end">
                <Image
                  src="/Images/CustomerReview/“ (1).svg"
                  height={27}
                  width={32}
                  alt=""
                />
              </div>
            </span>
            {/* <img src='Images/“ (1).svg' alt='' /> */}
          </p>
        </div>
      </div>
    </>
  )
}
export default CustomerReviewPage
