import Image from 'next/image'
import GradientBtn from './GradientBtn'

function SkillsOffered() {
  return (
    <div className="snap-fullPage h-full">
      <div className="md: relative my-2 flex w-full  max-w-[calc(1440px-80px)]  grid-cols-2 flex-col-reverse items-center justify-between  self-stretch    overflow-hidden    px-8 md:my-auto md:grid md:h-[682px]">
        <TextContainer />
        <MobileImg />
        {/* <DesktopImg /> */}
      </div>
    </div>
  )
}

function TextContainer() {
  return (
    <>
      <div className="       flex      justify-center       capitalize md:order-2  md:mb-0 md:w-full md:items-center ">
        <div className="flex w-[320px] flex-col gap-6 md:-ml-20 md:w-[580px]  md:gap-10  ">
          <div className=" font-monts  text-4xl font-bold  md:text-5xl">
            <span className="   ">skills</span>
            <span className=" text-pink "> offered </span>
          </div>
          <div className=" flex flex-col ">
            <p className="font-roboto text-2xl font-bold capitalize text-[#5E5252] md:text-2xl md:font-[500]">
              gardening classes
            </p>
            <p className=" mt-4 font-roboto text-sm  text-[#5E5252]   md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              eget congue vel vivamus massa ornare. Tellus fringilla urna,
              ultricies id justo. Nisl adipiscing faucibus sed auctor tristique
              lorem volutpat vulputate */
            </p>
            <p className="font-roboto text-lg font-bold capitalize text-pink md:text-2xl md:font-[500]">
              rs. 999/hr
            </p>
          </div>
          <div className=" bottom-28 flex self-start   md:static  ">
            <GradientBtn
              urlLink={'#'}
              rightArrow={true}
              btnCss=" z-50 inset-x-0 shrink-0  mx-auto !text-lg !px-8 !py-[10px] md:!text:xl md:py-4 md:px-16 md:text-2xl rounded-full rounded-tl-none  rounded-br-none mb-8   "
              btnName="explore more"
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
      <div className=" order-2  flex w-[320px]  justify-center    md:mt-0        md:mb-0 md:w-auto  ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/skills-offered.webp"
          height={633}
          width={630}
        />
      </div>
    </>
  )
}

export default SkillsOffered
