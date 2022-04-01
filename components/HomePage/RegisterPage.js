import Image from 'next/image'
import GradientBtn from './GradientBtn'
function RegisterPage() {
  return (
    <div className="snap-fullPage  h-full">
      <main className="my-3 flex  h-full w-full flex-col items-center justify-center gap-4  ">
        <div className="     flex  text-center text-xl  font-bold  text-[#5E5252]  lg:text-4xl  ">
          <div className=" w-[350px] uppercase md:w-[800px] ">
            tRUSTED BY
            <span className="text-[#FC4D6D]"> 100+</span> LEADING UNIVERSITIES
            AND COMPANIES
          </div>
        </div>
        <div className="-mt-10 w-full  md:hidden">
          <Image
            src="/Images/HomePage/laptop-girl-mobile.png"
            height={1220}
            width={856}
            className="-mt-8 p-8"
          />
        </div>
        <div className="-ml-8 hidden w-full justify-center  md:flex">
          <Image
            src="/Images/HomePage/laptop-girl-desktop.png"
            height={437}
            width={864}
            className="-mt-3"
          />
        </div>
        <div className="mb-8 -mt-16  md:mt-0">
          <GradientBtn
            urlLink={'#'}
            btnName="register now "
            btnCss=" px-8 py-3 md:text-xl  "
          />
        </div>
      </main>
    </div>
  )
}
export default RegisterPage
