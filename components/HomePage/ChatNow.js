import Image from 'next/image'
import GradientBtn from './GradientBtn'

function ChatNow({ mainContainer }) {
  return (
    <div className="snap-fullPage h-full">
      <div className={mainContainer}>
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
      <div className=" mt-12 flex      justify-center    text-center capitalize    md:order-2 md:w-full md:text-right ">
        <div className="flex w-[340px] flex-col md:-ml-20 md:w-[700px]   ">
          <div className=" font-monts  text-2xl     font-extrabold md:text-5xl   md:leading-tight">
            <span className="   ">
              Chat with our Counsellor to find the Tutor
            </span>
            <span className=" text-pink "> most suited for you</span>
          </div>
          <p className=" mt-4   w-[320px] self-end font-roboto  text-sm text-[#5E5252]  md:my-12 md:w-[500px] md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            eget congue vel vivamus massa ornare.
          </p>
          <div className="absolute inset-x-0 bottom-28  flex md:static  md:self-end">
            <GradientBtn
              urlLink={'#'}
              leftArrow={true}
              btnCss=" z-50 inset-x-0 shrink-0  mx-auto !text-lg !px-8 !py-[10px] md:!text:xl md:py-4 md:px-16 md:text-2xl "
              btnName="chat now"
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
      <div className="mt-6  flex  w-screen justify-center pl-4     md:hidden ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/chatnow-mobile-428w-622h.png"
          height={622}
          width={428}
        />
      </div>
    </>
  )
}

function DesktopImg() {
  return (
    <>
      <div className=" mt-12  hidden w-[400px] justify-center    text-center capitalize md:order-1 md:flex  md:w-full md:text-right">
        {/* <div className=" mt-0 -mb-8 flex   h-full w-full items-end justify-center  p-4 order-2  "> */}
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/chatnow-desktop-774w-714h.png"
          height={714}
          width={774}
        />
      </div>
    </>
  )
}

export default ChatNow
