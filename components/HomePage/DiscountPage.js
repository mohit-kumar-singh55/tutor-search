import Image from 'next/image'
import GradientBtn from './GradientBtn'

function DiscountPage() {
  return (
    <div className="snap-fullPage h-full">
      <div className="relative flex w-full max-w-[calc(1440px-80px)] grid-cols-2  flex-col-reverse  items-center justify-between self-stretch overflow-hidden  px-8   md:grid   ">
        <TextContainer />
        <MobileImg />
        <DesktopImg />
      </div>
    </div>
  )
}

function TextContainer() {
  return (
    <>
      <div className=" te xt-left flex h-full justify-center     capitalize md:order-2    md:-ml-10    md:w-full md:items-center md:text-right ">
        <div className="flex w-[320px] flex-col gap-6 md:-ml-20 md:w-[700px]  md:gap-10  ">
          <div className=" font-monts  text-xl font-extrabold     md:text-5xl  md:leading-tight">
            <span className="   ">Buy Trial Session</span>
            <span className=" text-pink "> @70% Discount! </span>
            <span> For 1st Time Users</span>
          </div>
          <div className=" flex flex-col gap-y-2">
            <p className="font-roboto text-lg font-bold capitalize text-[#5E5252] md:text-2xl md:font-[500]">
              order within
            </p>
            <p className="font-monts text-[#5E5252] md:text-2xl md:font-bold">
              13 : 30 : 16 Hours
            </p>
          </div>
          <div className=" bottom-28 flex self-start   md:static  md:self-end">
            <GradientBtn
              urlLink={'#'}
              leftArrow={true}
              btnCss=" z-50 inset-x-0 shrink-0  mx-auto !text-lg !px-8 !py-[10px] md:!text:xl md:py-4 md:px-16 md:text-2xl rounded-full rounded-tl-none  rounded-br-none  "
              btnName="enroll now"
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
      <div className="mt-6  w-screen  justify-center  pl-4     md:hidden ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/discount-mobile-428w-495h.png"
          height={495}
          width={428}
        />
      </div>
    </>
  )
}

function DesktopImg() {
  return (
    <>
      <div className=" ml-24 hidden   w-full justify-center       text-center capitalize md:order-1 md:flex  md:w-full md:text-right">
        {/* <div className=" mt-0 -mb-8 flex   h-full w-full items-end justify-center  p-4 order-2  "> */}
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/discount-mobile-781w-602h.png"
          height={602}
          width={781}
          // height={685}
          // width={840}
        />
      </div>
    </>
  )
}

export default DiscountPage
