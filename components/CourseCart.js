import Link from 'next/link';
import Image from 'next/image';

function CourseCart({
  coverImg,
  topRightTitle,
  tutorName,
  tutorImg,
  countryLogo
}) {
  return (
    <div className="flex rounded-md transition-all ease-in-out">
      <div className="w-[350px] overflow-hidden rounded-2xl  pb-[20px] font-poppins shadow-xl ring-2 ring-[#FC4D6D] ring-opacity-10">
        <CoverSection />
        <TutorDetails
          space={'-mt-[1.8rem] ml-[105px] '}
          imgPosition={'-top-[3rem] left-[-5.5rem]'}
        />
        <div className="flex flex-col items-center gap-3 py-4 px-2">
          <Language />
          <ActiveFinishedRatingBox />
          <Description />
          <BookTrialBtn space={'my-4'} />
        </div>
        <ViewAndChat space={'px-4'} />
      </div>
    </div>
  )

  function CoverSection() {
    return (
      <div className="relative  overflow-hidden rounded-t-2xl rounded-br-[30px] h-[210px]">
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
        <div className='absolute top-[10px] right-[18px]'>
          <div className="relative w-[14px] h-[18px]">
            <Image
              src="/Images/CourseCart/Bookmark.png"
              layout='fill'
              objectFit='contain'
              alt=""
            />
          </div>
        </div>
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
              height={13}
              width={13}
              alt=""
            />
          </div>
          <div>
            <Image
              className="self-center"
              src={countryLogo}
              width={14}
              height={15}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }

  function Language({ space }) {
    return (
      <div
        className={`text-[11px] font-medium text-[#474747] ${space} w-full items-start pl-3 mb-[18px] flex flex-col gap-[12.55px]`}
      >
        <span className="flex items-center gap-[15px]">
          <Image
            src="/Images/CourseCart/topper-cap.svg"
            width={22}
            height={18}
            alt=""
          />
          <span>English, Geography, +3</span>
        </span>
        <span className="flex items-center gap-[15px]">
          <Image
            src="/Images/CourseCart/voice.svg"
            width={24}
            height={15}
            alt=""
          />
          <span>English (Native), Hindi (Conversational) +1</span>
        </span>
      </div>
    )
  }

  function ActiveFinishedRatingBox({ space }) {
    return (
      <div className={`flex   ${space} justify-between gap-2  font-bold text-[13px] mb-2 w-full px-3`}>
        <TransparentBox title={'Active '} title2={'Students'} num="3" />
        <TransparentBox title={'Session '} title2={'finished'} num="45" />
        <TransparentBox title={'4.5'} title2={'Rating'} img={true} num="172" />
      </div>
    )
    function TransparentBox({ title, num, title2, img }) {
      return (
        <div
          className=" transparent-box    flex flex-col items-center justify-center
          rounded-xl px-4 text-center font-monts text-[11px] capitalize w-[100px] h-[54px]"
        >
          <div className="text-[#474747]">
            <span className="flex items-center justify-center  leading-[16px]">
              {title}
              <div className={img ? 'ml-1 block self-center' : 'hidden'}>
                <Image
                  height={10}
                  width={10}
                  src="/Images/CourseCart/star.svg"
                  alt="star"
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

  function Description() {
    return (
      <div className={` px-4 font-monts font-semibold text-xs capitalize text-[#606060]   `}>
        <span className='font-extrabold'>Brief :</span> dolor sit amet, consectetur
        elit. Fringilla enim, at rhoncus nisl, condimentum,Fringilla enim,
        <span>.....</span>
      </div>
    )
  }

  function BookTrialBtn({ space }) {
    return (
      <div className={`z-20 relative flex justify-center ${space} cursor-pointer`}>
        <Link href={'/'}>
          <>
            <a className="inline-block rounded-full backdrop-blur-md px-6 py-2 text-[14px] font-[600] text-[#FC4D6D] transition duration-150 ease-in-out hover:bg-[#FC4D6D] hover:text-white ">
              Book Trial | $20/hr
            </a>
            <div className="-z-20">
              <div className="w-[15px] h-[15px] gradientCircle left-[56px] top-[-4px] " />
              <div className="w-[35px] h-[35px] gradientCircle -bottom-2 right-[-7px]" />
              <div className="w-[27px] h-[27px] gradientCircle top-[1rem] left-[-2px]" />
            </div>
          </>
        </Link>
      </div>
    )
  }

  function ViewAndChat({ space }) {
    return (
      <div
        className={`${space} items-center flex justify-between font-monts font-semibold text-[12px] text-[#474747]`}
      >
        <Link href={'/'}>
          <a className="flex items-center">
            <span>
              <Image
                src="/Images/CourseCart/eye.svg"
                height={12}
                width={19}
                alt=""
              />
            </span>
            <span className="ml-[6px]">QuickView Details</span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className="flex items-center">
            <span>
              <Image
                src="/Images/CourseCart/inbox.svg"
                width={17}
                height={17}
                alt="inbox"
              />
            </span>
            <span className="ml-[6px]">Chat with Tutor</span>
          </a>
        </Link>
      </div>
    )
  }
}

export default CourseCart
