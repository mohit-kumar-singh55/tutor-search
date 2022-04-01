import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi'
import { SUBJECTS } from '../../utils/constants';
import { getLocalStorage } from '../../utils/cookies';

function TutorHeroPageMobile() {
  const [user_data, set_user_data] = useState(null)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }
  return (
    <div className="relative flex h-64 items-center justify-center  md:hidden ">
      {
        user_data
          ?
          <>
            <BackgroundFullImg user_data={user_data} />
            <div className="tutor-gradient -z-10" />
            <AndrewSmith user_data={user_data} />
            <ProfileImgAndQualifications user_data={user_data} />
          </>
          :
          null
      }
    </div>
  )
}

export default TutorHeroPageMobile
function BackgroundFullImg({ user_data }) {
  return (
    <div className="absolute top-0 -z-30  h-full  w-full ">
      <Image
        priority
        src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${user_data.background_pic}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
function AndrewSmith({ user_data }) {
  return (
    <div className="-mt-20 space-y-4 text-center font-bold capitalize text-white ">
      <div className=" -ml-8 text-sm tracking-[0.175em]">{user_data.headline}</div>
      <h1 className=" flex gap-[17px] text-3xl">
        <span> {user_data.name}</span>
        <div className="inline-block h-[21px] w-[21px]">
          <Image
            src={'/Images/TutorProfile/svg/right-ok.svg'}
            height={21}
            width={21}
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/Images/TutorProfile/svg/australia.svg'}
            height={19}
            width={19}
          />
        </div>
      </h1>
    </div>
  )
}

function ProfileImgAndQualifications({ user_data }) {
  return (
    <div className="mx absolute -bottom-20 mx-16 flex items-center justify-center gap-2">
      <ProfileImg profile_img={user_data.profile_img} />
      <div className="w-52  capitalize">
        <p className="mt-2 mb-5 text-sm font-[600] tracking-[.065em] text-white">
          {user_data.teaching_experience}
        </p>
        <TutorDescription user_data={user_data} />
      </div>
    </div>
  )
}
function TutorDescription({ user_data }) {
  return (
    <div className="ml-[7px] space-y-1  text-xs font-[500] tracking-[0.065em] text-[#616161]  ">
      <div className="flex gap-[10px]  ">
        <div className="ml-[-7px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/topper-cap-gray.svg'}
            priority
            height={16}
            width={16}
          />
        </div>
        <span>Teaches {user_data?.subject_taught_id?.map(function (elem) {
          return SUBJECTS[elem];
        }).join(", ")} language</span>
      </div>
      <div className="flex gap-[10px]">
        <div className="   ml-[-4px]  mr-[5px] flex justify-center">
          <FiMessageCircle className="text-sm" />
        </div>
        <span>Speaks {user_data.language_spoken.map(function (elem) {
          return elem.language;
        }).join(", ")} </span>
      </div>
      <div className="flex gap-[10px]  ">
        <div className="ml-[-2px] mr-[4px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/circles-gray.svg'}
            height={13.33}
            width={13.33}
          />
        </div>
        <span>0 lessons</span>
      </div>
    </div>
  )
}
function ProfileImg({ profile_img }) {
  return (
    <div>
      <div className="relative h-36 w-32 overflow-hidden rounded-lg bg-gradient-to-r from-[#FC4D6D] to-[#FDA02F] p-2">
        <Image
          src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${profile_img}`}
          objectFit="contain"
          layout="fill"
        />
      </div>
    </div>
  )
}
