import { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import SearchBox from '../../components/Layouts/Navbar/Searchbox'
import axios from 'axios'
import {
  baseUrlProfilePic,
  LanguageLevel,
  LANGUAGES,
  SUBJECTS,
  typesenseUrl,
} from '../../utils/constants'
import Link from 'next/link'
import Image from 'next/image'

const Tutors = () => {
  const [tutorData, setTutorData] = useState(null)
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    async function defaultFunc() {
      let res = await axios.get(typesenseUrl + 'tutor/search', {
        params: { q: searchText, page: page },
      })
      console.log(res, 'res')
      if (res && res.data && res.data.success) {
        console.log(res.data.data.hits, 'res.data.data.hits')
        setTutorData(res.data.data.hits)
        setTotalCount(res.data.data.out_of)
        setCount(res.data.data.found)
      }
    }
    defaultFunc()
  }, [searchText, page])

  return (
    <>
      <Head>
        <title>Skilly tree</title>
      </Head>
      <div className=" mt-8 flex justify-center">
        <SearchBox onSearch={(val) => setSearchText(val)} />
      </div>

      <div className=" my-8 mx-16 flex flex-wrap content-center justify-center gap-x-8 gap-y-8">
        {tutorData
          ? tutorData.map(function (dd, key) {
              return (
                <CourseCart
                  topRightTitle={'top tutors'}
                  coverImg={`${baseUrlProfilePic}${dd.background_pic}`}
                  tutorName={dd.tutor_name}
                  countryLogo={'/Images/CourseCart/united-kingdom.svg'}
                  tutorImg={`${baseUrlProfilePic}${dd.profile_img}`}
                  tutorData={dd}
                />
              )
            })
          : null}
      </div>
    </>
  )
}

export default Tutors

function CourseCart({
  coverImg,
  topRightTitle,
  tutorName,
  tutorImg,
  countryLogo,
  tutorData,
}) {
  return (
    <div className="  flex  rounded-md transition-all  ease-in-out   ">
      <div className="w-[320px] overflow-hidden rounded-2xl  pb-[22px] font-poppins shadow-xl   ring-2 ring-[#FC4D6D] ring-opacity-10">
        <CoverSection />
        <TutorDetails
          space={'-mt-[1.8rem] ml-[105px] '}
          imgPosition={'  -top-[3rem] left-[-5.5rem]'}
        />
        <div className="flex flex-col items-center gap-3 p-4 ">
          <Language tutorData={tutorData} />
          <ActiveFinishedRatingBox />
          <Description description={tutorData.introduction.substr(0, 100)} />
          <BookTrialBtn space={'my-4'} price={tutorData.hourly_rate} />
        </div>
        <ViewAndChat space={'px-4'} />
      </div>
    </div>
  )

  function CoverSection() {
    return (
      <div className="relative  overflow-hidden rounded-t-2xl rounded-br-[30px]  ">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          // priority
          src={coverImg}
          height={191}
          width={383}
          alt=""
        />
        <div className="transparent-box absolute top-0 rounded-br-3xl px-[23px] py-[10px] text-center font-poppins text-[12px] font-bold uppercase text-white ">
          {topRightTitle}
        </div>
        <Image
          className="absolute top-4 right-4"
          src="/Images/archive-vector.svg"
          width={14}
          height={18}
          alt=""
        />
      </div>
    )
  }
  function TutorDetails({ space, imgPosition }) {
    return (
      <div className={`relative ${space}   flex    items-center    `}>
        <div
          className={` absolute  ${imgPosition}  mr-4 flex h-[75px] w-[75px] items-center justify-center rounded-full ring-2 ring-white`}
        >
          <Image src={tutorImg} alt="" height={75} width={75} />
        </div>
        <div className="flex gap-[8px]   ">
          <span className="text-[14px] font-semibold ">{tutorName}</span>
          <div>
            <Image
              className="self-center"
              src="/Images/CourseCart/verify-icon.svg"
              height={12}
              width={12}
              alt=""
            />
          </div>
          <div>
            <Image
              className="self-center"
              src={countryLogo}
              width={13}
              height={13}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
  function Language({ tutorData }) {
    return (
      <div
        className={`mb-[18px] flex  flex-col gap-[12.55px] text-[10px] text-[#474747]`}
      >
        <span className="flex items-center gap-[15px]">
          <Image
            src="/Images/CourseCart/topper-cap.svg"
            width={22}
            height={18}
            alt=""
          />
          <span>
            {tutorData.subject_taught_id
              .map(function (elem) {
                return SUBJECTS[elem]
              })
              .join(', ')}
          </span>
        </span>
        <span className="flex items-center gap-[15px]">
          <Image
            src="/Images/CourseCart/voice.svg"
            width={24}
            height={15}
            alt=""
          />
          <span>
            {tutorData.language_spoken
              .map(function (elem) {
                console.log(elem, 'elem')
                return (
                  LANGUAGES[elem.language_id] +
                  '(' +
                  LanguageLevel[elem.language_level_id] +
                  ')'
                )
              })
              .join(', ')}
          </span>
        </span>
      </div>
    )
  }
  function ActiveFinishedRatingBox({ space }) {
    return (
      <div className={`flex   ${space} justify-between gap-2  font-bold `}>
        <TransparentBox title={'Active '} title2={'Students'} num="0" />
        <TransparentBox title={'Session '} title2={'finished'} num="0" />
        <TransparentBox title={'0.0'} title2={'Rating'} img={true} num="0" />
      </div>
    )
    function TransparentBox({ title, num, title2, img }) {
      return (
        <div
          className=" transparent-box    flex flex-col items-center justify-center
          rounded-xl px-4 text-center font-monts text-[10px] capitalize"
        >
          <div className="text-[#474747]     ">
            <span className="flex items-center justify-center  leading-[16px]">
              {title}
              <div className={img ? 'ml-1 block self-center' : 'hidden'}>
                <Image
                  height={14.88}
                  width={14.25}
                  src="/Images/star.png"
                  alt=""
                />
              </div>
            </span>
            {title2}
          </div>
          <div className="text-[#FC4D6D]">{num}</div>
        </div>
      )
    }
  }
  function Description({ description }) {
    return (
      <div className={` px-4 font-monts text-xs capitalize text-[#606060]   `}>
        <span className="font-bold">Brief :</span> {description}
        <span>.....</span>
      </div>
    )
  }
  function BookTrialBtn({ space, price }) {
    return (
      <div className={`relative flex justify-center ${space} `}>
        <Link href={'/'}>
          <a className="z-50 inline-block rounded-full border-2 border-[#FC4D6D] bg-white  px-6 py-2 text-[14px] font-[600] text-[#FC4D6D] transition duration-150 ease-in-out hover:bg-[#FC4D6D] hover:text-white ">
            Book Trial | ${price}/hr
          </a>
        </Link>
        {/* <div className="-z-10">
          <div className="w-[11px] h-[11px] gradientCircle left-[9rem]  -top-[.5rem] " />
          <div className="w-[35px] h-[35px] gradientCircle  -bottom-2 right-14"></div>

          <div className="w-[27px] h-[27px] gradientCircle top-[2rem] left-[4rem]"></div>
        </div> */}
      </div>
    )
  }
  function ViewAndChat({ space }) {
    return (
      <div
        className={`${space} bg-er flex  justify-between font-monts text-[9px] font-[600]  text-[#474747]  `}
      >
        <Link href={'/'}>
          <a className="flex items-center ">
            <span>
              <Image
                src="/Images/CourseCart/eye.svg"
                height={12.31}
                width={16.7}
                alt=""
              />
            </span>
            <span className="ml-[7px]">QuickView Details</span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className="flex items-center">
            <span>
              <Image
                src="/Images/CourseCart/inbox.svg"
                width={17.58}
                height={17.38}
              />
            </span>
            <span className="ml-[10px]">Chat with Tutor</span>
          </a>
        </Link>
      </div>
    )
  }
}
