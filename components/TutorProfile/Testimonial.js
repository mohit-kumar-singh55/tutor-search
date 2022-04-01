import React from 'react'
import Image from 'next/dist/client/image'
import { AiFillStar, AiOutlineDown } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { useState } from 'react'

function Testimonial() {
  return (
    <div className="mx-2 my-8    md:mx-0  md:bg-[#fafafa]">
      <Mobile />
      <Desktop />
    </div>
  )
}
export default Testimonial

function Mobile() {
  return (
    <div className="justify-self m-2 mx-auto mt-6  flex max-w-md  flex-col justify-center gap-4 rounded-xl border-2  py-6  px-2 font-poppins  capitalize  md:mx-auto md:hidden md:border-none">
      <Title />
      <StudentReviews />
      <section className="flex flex-col items-center justify-center gap-4">
        <p className="flex items-center gap-1 font-roboto text-xs  font-bold tracking-wide text-[#5A5959]">
          <span> write a review</span> <BiChevronDown className=" text-xl" />
        </p>
        <textarea
          // value=""
          className="mb-2 h-44 w-full rounded-2xl bg-[#F5F5F5] p-4  text-sm capitalize outline-none"
          placeholder="Write a review..."
        />
      </section>
      <section className="rounded-xl border-4 p-4">
        <div className="mb-2 text-sm font-bold text-[#787878]">Give Rating</div>
        <div className=" mb-3 h-[1px] w-40 rounded-full bg-[#D1D1D1]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#6C6C6C]">
            <BsEmojiSmile className="text-3xl" />
            <p className="text-sm font-medium"> Good Experience</p>
          </div>
          <Stars />
        </div>
      </section>
    </div>
  )
}
function Desktop() {
  const [review, setReview] = useState(false)
  return (
    <div className="relative hidden max-w-full flex-col justify-center  p-9 font-poppins md:flex">
      <DesktopTestimonial setReview={setReview} review={review} />
      <PopUpWindow setReview={setReview} review={review} />
    </div>
  )
}
function DesktopTestimonial({ setReview, review }) {
  return (
    <>
      <h1 className="mb-2 text-center text-lg font-bold  capitalize text-[#FC4D6D]">
        testimonial
      </h1>
      <Title />
      <div className="mt-16 mb-14 flex justify-center gap-8 ">
        <StudentReviews />
        <StudentReviews />
      </div>
      <div className="mx-auto flex items-center gap-2 font-roboto text-lg font-bold capitalize text-[#5A5959]">
        <span> write a review</span>
        <button onClick={() => setReview(true)} className="cursor">
          <img src=" /Images/TutorProfile/svg/pen.svg" />
        </button>
      </div>
    </>
  )
}
function PopUpWindow({ setReview, review }) {
  return (
    <div
      onClick={() => setReview(false)}
      className={`absolute   left-0 top-0 ${
        review ? 'flex' : 'hidden'
      }    bgColor h-full w-full items-center justify-center`}
    >
      <div
       
        className="  mt-20 w-[591px] rounded-xl bg-white px-6 py-4  font-poppins capitalize  opacity-100 shadow-md "
      >
        <h1 className=" text-lg font-semibold text-[#787878] ">review</h1>
        <section className="mb-4  mt-4 flex justify-between ">
          <div className=" flex gap-2">
            <span className="text-sm font-semibold">give rating</span>
            <Stars />
          </div>
          <div className="flex items-center gap-2 text-[#6C6C6C]">
            <BsEmojiSmile className="text-xl" />
            <p className="text-xs font-medium"> Good Experience</p>
          </div>
        </section>
        <textarea
          // value=""
          className="mb-2 h-36 w-full rounded-2xl border-2 bg-[#F5F5F5]  p-4 text-sm capitalize outline-none"
          placeholder="Write a review..."
        />
        <button
          onClick={() => setReview(false)}
          className="rounded-full bg-[#FC4D6D] px-6 py-2 capitalize text-white"
        >
          submit
        </button>
      </div>
    </div>
  )
}
function Stars() {
  return (
    <div className="flex gap-1 text-3xl text-[#FFB800]   md:text-xl">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar className="text-[#DCDCDC]" />
    </div>
  )
}
function Title() {
  return (
    <section className="mx-0 mb-6 space-y-2 md:mx-auto">
      <h2 className="text-2xl font-semibold capitalize tracking-wide text-[#5F5F5F]">
        What Students Say
      </h2>
      <SmallLine />
    </section>
  )
}
function SmallLine() {
  return (
    <div className="flex h-[3px] space-x-1   ">
      <div className=" mr-[1px] w-[32px] rounded-full bg-[#FC4D6D]" />
      <div className=" w-[6px] rounded-full bg-[#FC4D6D]" />
      <div className="  w-[6px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}
function StudentReviews() {
  return (
    <section className="flex justify-between md:gap-3 ">
      <div className="relative h-[120px]  w-[120px] rounded-3xl rounded-br-none bg-gray-200">
        <Image src="/" objectFit="cover" layout="fill" />
      </div>

      <div className=" mx-2 w-[260px]  capitalize">
        <div className="  mb-[2px] flex items-center justify-between">
          <span className=" whitespace-nowrap text-lg font-semibold tracking-wide  text-[#5F5F5F]">
            Jamie Oliver
          </span>
          <div className="flex gap-1 text-sm   text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p className="top mb-2  text-xs  font-medium text-[#858585]">
          Home Cook
        </p>
        <p className="text-xs font-medium leading-tight text-[#6F6F6F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
          dignissim elit rutrum cras tincidunt. Aliquet quis et, elit ultricies
          aliquam. Pulvinar sagittis enim, id amet cursus amet
        </p>
      </div>
    </section>
  )
}

