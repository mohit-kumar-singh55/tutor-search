import React from 'react'
import GradientBtn from './GradientBtn'
import { Logo } from '../Navbar'

function Footer() {
  return (
    <div className="snap-fullPage-footer h-[calc(100vh-79px)] w-full ">
      <main
        className="flex h-full w-full  items-center justify-center px-4  
       "
      >
        <div className="mx-4  my-2 flex  w-[340px] flex-col items-center justify-between   gap-4    py-[83px]  md:mx-auto md:h-[400px] md:w-[calc(1440px-160px)] md:flex-row ">
          <Logo logoCss={'  md:self-baseline'} />
          <FreeTrial />
          <div
            className="mt-4 h-[1.5px]  w-[320px]  rounded-full bg-black  md:h-[320px]
           md:w-[1.5px]"
          />
          <div className="flex flex-col gap-[65px] ">
            <ProductAndCompany />
            <TandC />
          </div>
        </div>
      </main>
    </div>
  )
  function FreeTrial() {
    return (
      <div className=" flex flex-col  justify-start text-center  font-roboto md:w-[375px] md:gap-2 md:text-left ">
        <div className="text-14px mb-2 font-roboto font-bold">
          Latest Blog Post
        </div>
        <div className="mb-[9px]  font-monts text-[24px] font-[600] text-[#2F2F2F]">
          Ready to get started ?
        </div>
        <p className="mb-[25px] font-roboto text-[14px] font-normal leading-[20px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex self-center md:self-start">
          <GradientBtn
            urlLink="#"
            btnName="Start Free Trial"
            btnCss=" px-8 py-3 md:text-lg   "
          />
        </div>
      </div>
    )
  }
  function ProductAndCompany() {
    return (
      <div className="flex gap-[76px] font-monts ">
        <div>
          <Title title={'Product'} />
          <div className="flex flex-col gap-2">
            <Data data={'Product'} />
            <Data data={'Product'} />
            <Data data={'Product'} />
            <Data data={'Product'} />
            <Data data={'Product'} />
          </div>
        </div>
        <div>
          <Title title={'Company'} />
          <div className="flex flex-col gap-2">
            <Data data={'Company'} />
            <Data data={'Company'} />
            <Data data={'Company'} />
            <Data data={'Company'} />
            <Data data={'Company'} />
          </div>
        </div>
      </div>
    )
    function Title({ title }) {
      return (
        <div className="mb-[13px] text-[20px] font-bold text-[#2C2C2C]">
          {title}
        </div>
      )
    }
    function Data({ data }) {
      return <div className="text-[14px] font-[500]">{data}</div>
    }
  }

  function TandC() {
    return (
      <div className="flex gap-[21px] font-monts text-[14px] font-[500] ">
        <span>© 2010 — 2020</span> <span>Privacy — Terms</span>
      </div>
    )
  }
}

export default Footer
