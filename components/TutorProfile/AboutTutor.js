import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SkillRange from './SkillRange'
import { useRecoilState } from 'recoil'
import { SkillRanges, SkillRanges2, SkillRanges3, SkillRanges4 } from '../store';
import { getLocalStorage } from '../../utils/cookies'

function AboutTutor() {
  const [user_data, set_user_data] = useState({})

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  const [slides, setSlides] = useState({
    slide1: true,
    slide2: false,
    slide3: false,
  })

  function toggleSlides1() {
    setSlides({ slide1: true, slide2: false, slide3: false })
  }

  function toggleSlides2() {
    setSlides({ slide1: false, slide2: true, slide3: false })
  }

  function toggleSlides3() {
    setSlides({ slide1: false, slide2: false, slide3: true })
  }

  return (
    <div className="mx-auto mt-36  mb-16  flex  max-w-sm   items-center justify-center    md:mx-auto md:mt-auto md:mb-auto md:h-screen ">
      <main className="  flex flex-col  gap-4    px-4  md:flex-row md:gap-6  lg:gap-[117px]  ">
        <Video user_data={user_data} />
        <RightText user_data={user_data} />
      </main>
    </div>
  )
  function RightText({ user_data }) {
    return (
      <div className="relative w-auto pb-2  capitalize md:w-[416px] ">
        <div className="mb-2 mt-[28px] flex flex-col gap-[9px] font-poppins md:mb-[39px]">
          <div className="hidden font-bold text-[#FC4D6D] md:flex">
            about us
          </div>
          <h1 className="text-[22px] font-[600] tracking-[0.05em] text-[#5F5F5F] md:text-3xl ">
            about the tutor
          </h1>
          <SmallLine />
        </div>
        <Slide1 css={slides.slide1 ? 'block' : 'hidden'} user_data={user_data} />
        <Slide2 css={slides.slide2 ? 'block' : 'hidden'} user_data={user_data} />
        <Slide3 css={slides.slide3 ? 'block' : 'hidden'} user_data={user_data} />
        <SliderBtn />
      </div>
    )
  }
  //
  function SliderBtn() {
    return (
      <div className="absolute   -bottom-2 flex     w-full justify-center   gap-[1rem] md:bottom-4 ">
        <div
          className={`${slides.slide1 ? 'bg-[#FC4D6D]' : 'bg-white'
            } h-[10px] w-[10px] overflow-hidden rounded-full ring-2 ring-[#FC4D6D] hover:cursor-pointer`}
          onClick={toggleSlides1}
        />
        <div
          className={`${slides.slide2 ? 'bg-[#FC4D6D]' : 'bg-white'
            } h-[10px] w-[10px] overflow-hidden rounded-full ring-2 ring-[#FC4D6D] hover:cursor-pointer `}
          onClick={toggleSlides2}
        />
        <div
          className={`${slides.slide3 ? 'bg-[#FC4D6D]' : 'bg-white'
            } h-[10px] w-[10px] overflow-hidden rounded-full ring-2 ring-[#FC4D6D] hover:cursor-pointer `}
          onClick={toggleSlides3}
        />
      </div>
    )
  }
  //
}

function Video(props) {
  // overflow-hidden  rounded-xl bg-gradient-to-r from-[#FD4E6D] to-[#FDA02F] p-1
  return (
    <div className=" mx-auto mb-6 flex w-full flex-col gap-4 sm:w-[376px] md:w-auto ">
      <div className="  md:white-linear-gradient h-[161px] rounded-lg bg-gradient-to-r  from-[#FD4E6D] to-[#FDA02F]  p-1.5  md:h-[486px] md:w-[430px] md:rounded-xl  ">
        <div className="relative order-2 flex h-full w-full  items-center justify-center   overflow-hidden   rounded-xl  md:order-1     ">
          {/* <div className="relative order-2 flex items-center justify-center   overflow-hidden   rounded-xl  md:order-1 md:h-[486px] md:w-[430px]    "> */}
          <Image
            priority
            src={`http://img.youtube.com/vi/${props.user_data.video_link}/0.jpg`}
            layout="fill"
            objectFit="cover"
          />

          <div className="white-linear-gradient absolute  bottom-0" />
          <Link href={'#'}>
            <a className=" relative z-10 h-16 w-16 transition-all delay-150  ease-in-out hover:scale-[1.2] md:h-24 md:w-24">
              <Image
                src={'/Images/TutorProfile/svg/video-play-btn.svg'}
                objectFit="cover"
                layout="fill"
              />
            </a>
          </Link>

          <div className="absolute  bottom-[18px] hidden flex-col  justify-center gap-[14px] md:flex">
            <div className=" flex justify-center gap-2 ">
              {Array.from(Array(5), (index) => index + 1).map((index) => (
                <Image
                  src={'/Images/TutorProfile/svg/yellow-star.svg'}
                  height={19.38}
                  width={19.03}
                />
              ))}
            </div>
            <div className=" text-center font-poppins text-[14px] font-[600] text-[#5F5F5F]  ">
              ( 36 reviews )
            </div>
          </div>
        </div>
      </div>

      <button
        className="3px] rounded-lg border-2 border-[#FC4D6D] py-1.5  text-center text-lg font-semibold capitalize text-[#FC4D6D] md:order-2 md:text-[22px]
        "
      >
        send message
      </button>
    </div>
  )
}

function SmallLine() {
  return (
    <div className="flex h-[3px]  ">
      <div className="  w-[32px] rounded-full bg-[#FC4D6D]" />
      <div className=" ml-[5px] w-[6px] rounded-full bg-[#FC4D6D]" />
      <div className=" ml-[2px] w-[6px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}

function Range({ skillValue, setter, name }) {
  return (
    <div className="space-y-2">
      <div className=" ml-[5px] capitalize">{name}</div>
      <SkillRange setValues={setter} values={skillValue} />
    </div>
  )
}

function Slide1({ css, user_data }) {
  const [skills, setSkills] = useRecoilState(SkillRanges)
  const [skills2, setSkill2] = useRecoilState(SkillRanges2)
  const [skills3, setSkill3] = useRecoilState(SkillRanges3)
  const [skills4, setSkill4] = useRecoilState(SkillRanges4)
  return (
    <div className={css}>
      <p className="slide-para-style mb-2 text-sm md:mb-[40px]">
        {user_data.introduction}
      </p>

      {/* <div className=" slide-para-style flex h-full flex-col gap-[.7rem]  py-4 ">
                <Range
                    name="French cusine"
                    setter={setSkills}
                    skillValue={skills.map((s) => s)}
                />
                <Range
                    name="chinese cusine"
                    setter={setSkill2}
                    skillValue={skills2.map((s) => s)}
                />
                <Range
                    name="Indian cusine"
                    setter={setSkill3}
                    skillValue={skills3.map((s) => s)}
                />
                <Range
                    name="desert"
                    setter={setSkill4}
                    skillValue={skills4.map((s) => s)}
                />
            </div> */}
    </div>
  )
}
function Slide2({ css, user_data }) {
  return (
    <div className={css}>
      <div className=" flex flex-col gap-[1rem] font-poppins text-[#858585]">
        {/* <div>
                    <div className="tracking-0.05em font mb-[8px] text-[20px] font-[600]">
                        Methodology
                    </div>
                    <p className="slide-para-style text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
                        dignissim elit rutrum cras tincidunt. Aliquet quis et, elit
                        ultricies aliquam. Pulvinar sagittis enim, id amet cursus amet.
                        Lectus auctor velit vitae commodo. Tincidunt senectus tincidunt ac
                        et pellentesque turpis nulla morbi.
                    </p>
                </div> */}
        <div>
          <div className="tracking-0.05em font mb-[13px] text-[20px] font-[600]">
            Background
          </div>
          <p className="slide-para-style">
            {user_data.introduction}
          </p>
        </div>
      </div>
    </div>
  )
}

function Slide3({ css, user_data }) {
  return (
    <di className={css}>
      <p className="slide-para-style mb-2 text-sm md:mb-[40px]">
        {user_data.introduction}
      </p>
      <div className="flex flex-col  font-poppins  text-lg normal-case md:text-[24px]">
        <div className="mb-2 font-bold text-[#6C6C6C]  md:mb-8 ">Rates</div>
        <div className="flex flex-col gap-[1.5rem] font-[500] text-[#6C6C6C] ">
          <div className="">
            <span>Rate for online classes :</span>&nbsp;
            <span className="font-bold text-[#FC4D6D]">${user_data.hourly_rate}/hr</span>
          </div>
          <div>
            <span> Rate for 5 hours of classes :</span>&nbsp;
            <span className="font-bold text-[#FC4D6D]">${(user_data.hourly_rate * 5) - user_data.hourly_rate}</span>
          </div>
          <div>
            <span> Rate for 10 hours of classes :</span>&nbsp;
            <span className="font-bold text-[#FC4D6D]">${(user_data.hourly_rate * 10) - user_data.hourly_rate}</span>
          </div>
        </div>
      </div>
    </di>
  )
}

export default AboutTutor
