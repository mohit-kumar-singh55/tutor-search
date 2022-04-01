import Image from 'next/image'
import GradientBtn from './GradientBtn'

function HeroSection2({ mainContainer }) {
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
      <div className="mt-12  w-[400px] justify-center text-center    capitalize md:order-2    md:w-full md:text-right ">
        <div className="flex flex-col md:-ml-20 md:w-[700px]   ">
          <div className=" font-monts  text-2xl     font-extrabold md:text-5xl   md:leading-snug">
            <span className="   ">
              Do U Wish To Guarantee Yourself With A New Skill Within
            </span>
            <span className=" text-pink "> Next 30 Days?</span>
          </div>
          <p className="  mt-4 font-roboto text-sm  text-[#5E5252] md:my-12  md:text-lg">
            Buy Our Trial 1-To-1 Tutor Session Now
          </p>
          <div className="absolute inset-x-0 bottom-28  flex md:static  md:self-end">
            <GradientBtn
              urlLink={'#'}
              leftArrow={true}
              btnCss=" z-50 inset-x-0 shrink-0  mx-auto !text-lg !px-8 !py-[10px] md:!text:xl md:py-4 md:px-16 md:text-2xl "
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
      <div className="mt-6   flex w-screen justify-center pl-4     md:hidden ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/woman-sitting-mobile.png"
          height={526}
          width={428}
        />
      </div>
    </>
  )
}

function DesktopImg() {
  return (
    <>
      <div className=" mt-12  hidden w-[400px] justify-center     text-center capitalize md:order-1  md:flex md:w-full md:text-right">
        {/* <div className=" mt-0 -mb-8 flex   h-full w-full items-end justify-center  p-4 order-2  "> */}
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          src="/Images/HomePage/woman-sitting-desktop.png"
          height={607}
          width={783}
        />
      </div>
    </>
  )
}

// function ImgContainer() {
//   return (
//     <>
//       <div className="  order-1  mt-6   mb-16    flex  w-[350px]  justify-center md:mb-24  md:mt-0 md:h-full  md:w-full md:items-end  md:p-4">
//         <Image
//           placeholder="blur"
//           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
//           // priority
//           src="/Images/HomePage/happy-young-woman-sitting-floor-using-laptop-gray-wall-mobile.png"
//           height={1076}
//           width={854}
//         />
//       </div>
//     </>
//   )
// }

// function DesktopImg() {
//   return (
//     <div className=" mt-12  hidden w-[400px] justify-center    text-center capitalize md:order-2 md:flex  md:w-full md:text-right">
//       <div className="flex flex-col  md:w-[690px]  ">
//         <div className=" font-monts  text-2xl font-bold  md:text-5xl">
//           <span className="   ">
//             Do U Wish To Guarantee Yourself With A New Skill Within
//           </span>
//           <span className=" text-pink "> Next 30 Days?</span>
//         </div>
//         <p className="  mt-4 font-roboto text-sm  text-[#5E5252] md:my-12  md:text-lg">
//           Buy Our Trial 1-To-1 Tutor Session Now
//         </p>
//         <div className="absolute inset-x-0 bottom-28  flex md:static  md:self-end">
//           <GradientBtn
//             urlLink={'#'}
//             leftArrow={true}
//             btnCss=" z-50 inset-x-0 shrink-0  mx-auto !text-lg !px-8 !py-[10px] md:!text:xl md:py-4 md:px-16 md:text-2xl "
//             btnName="buy now"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
export default HeroSection2
