import Image from 'next/image'
import GradientBtn from './GradientBtn'
function HeroSection3({ mainContainer }) {
  return (
    <div className="snap-fullPage h-full">
      <main className={mainContainer}>
        <TextContainer />
        <MobileImg />
        <DesktopImg />
      </main>
    </div>
  )
}

function TextContainer() {
  return (
    <>
      <div className=" mt-12 w-[350px] justify-center   px-4 text-center capitalize md:flex md:w-full md:text-left">
        <div className="flex flex-col  md:w-[590px]  ">
          <div className="z-50 font-monts text-2xl     font-extrabold  md:w-[740px]    md:text-5xl md:leading-tight">
            <span className="   ">
              Did You Ever Start Learning A Video Course But Did Not
            </span>
            <span className=" text-pink "> Finish It Completely?</span>
          </div>
          <p className=" mt-4 font-roboto text-sm text-[#5E5252]  md:my-12 md:mb-28 md:pr-16 md:text-lg">
            Buy Our Trial 1-To-1 Tutor Session Now
          </p>
          <div className="  absolute inset-x-0 bottom-28  flex  md:static">
            <GradientBtn
              urlLink={'#'}
              rightArrow={true}
              btnCss="md:text-2xl z-50 inset-x-0 shrink-0  !text-lg !px-8 !py-[10px] mx-auto md:mx-0 md:!text:xl md:py-4 md:px-16 "
              btnName="buy now"
            />
          </div>
        </div>
      </div>
    </>
  )
}
function MobileImg() {
  return (
    <>
      <div className="h-full  w-[calc(100vw-15px)] justify-center  md:hidden ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/guitar-man-mobile.png"
          width={856}
          height={1310}
        />
      </div>
    </>
  )
}

function DesktopImg() {
  return (
    <div className=" -mb-14  hidden justify-center          md:mt-0 md:flex  md:w-full  md:items-end md:p-4 ">
      <Image
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
        src="/Images/HomePage/guitar-man-desktop.png"
        width={748}
        height={720}
      />
    </div>
  )
}
export default HeroSection3

// src="/Images/HomePage/man-using-guitar.png"
// width={415}
// height={678}
