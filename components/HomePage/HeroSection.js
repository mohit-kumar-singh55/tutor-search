import Image from 'next/image'
import GradientBtn from './GradientBtn'
function HeroSection({ mainContainer }) {
  return (
    <div className="snap-fullPage h-full ">
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
      <div className="ite mt-12 w-[300px] justify-center   text-center   capitalize md:w-full md:text-left">
        <div className="flex flex-col  md:w-[590px]  ">
          <div className=" font-monts text-3xl font-extrabold md:text-6xl     md:leading-tight">
            <span className="   ">Start Your 2022 with a</span>
            <span className=" text-pink "> New Skill</span>
          </div>
          <p className=" mt-4 font-roboto text-sm  text-[#5E5252] md:mb-28 md:pr-16 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim turpis
            penatibus sed id amet hendrerit dictumst mauris, quisque
          </p>
          <div className="  absolute inset-x-0 bottom-28  flex  md:static">
            <GradientBtn
              urlLink={'#'}
              rightArrow={true}
              btnCss="md:py-4 md:px-16 md:text-2xl z-50 inset-x-0 shrink-0  mx-auto md:mx-0  text-lg px-8 py-[10px] md:text:xl  "
              btnName="get a trial"
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
      <div className="mt-6 flex w-screen  justify-center       md:hidden ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          // priority
          src="/Images/HomePage/surprised-happy-girl-mobile.png"
          height={628}
          width={428}
        />
      </div>
    </>
  )
}

function DesktopImg() {
  return (
    <>
      <div className="  mt-0 -mb-20 -mr-10    hidden w-full items-end   justify-center    p-4 md:flex ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          priority
          src="/Images/HomePage/surprised-happy-girl-desktop.png"
          height={1404}
          width={1524}
        />
      </div>
    </>
  )
}
export default HeroSection
