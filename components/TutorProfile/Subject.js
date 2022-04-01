import { SUBJECTS } from "../../utils/constants";
import { getLocalStorage } from "../../utils/cookies";
import { useEffect, useState } from "react";

function Subject() {
  const [user_data, set_user_data] = useState()

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  return (
    <div className="mx-auto mb-8 mt-4 font-poppins">
      {
        user_data
          ?
          <>
            <Mobile user_data={user_data} />
            <Desktop user_data={user_data} />
          </>
          :
          null
      }
    </div>
  )
}

export default Subject

function Mobile({ user_data }) {
  return (
    <div className="mx-auto mb-12 max-w-sm p-4  font-poppins sm:mx-auto md:hidden">
      <Title />
      <select className="mb-6 w-full max-w-[373px] rounded-md border-2 bg-white py-2 px-4 text-sm text-gray-400 outline-none ">
        {
          user_data?.subject_taught_id.map(function (dd) {
            return (
              <option>{SUBJECTS[dd]}</option>
            )
          })
        }
      </select>

      <section className=" capitalize">
        <SubjectIndex />
        <SubjectIndex />
        <SubjectIndex />
        <SubjectIndex />
      </section>
    </div>
  )
}
function Desktop({ user_data }) {
  return (
    <div className="hidden px-4 md:block">
      <div className="  mb-14 flex w-full justify-center  ">
        <Title />
      </div>
      <section className="flex justify-center  capitalize">
        <div className=" flex flex-col gap-16  pr-14 pt-3 text-2xl font-medium">
          {
            user_data.subject_taught_id.map(function (dd, key) {
              return (
                <h1 className={`cursor-pointer ${key === 0 ? 'text-[#FC4D6D]' : null}`}>{SUBJECTS[dd]}</h1>
              )
            })
          }
        </div>

        <div className="flex flex-col ">
          <SubjectType />
          <SubjectType />
          <SubjectType />
          <SubjectType />
        </div>
      </section>
    </div>
  )
}
function SubjectType() {
  return (
    <div className="flex">
      <div className="h-32 w-[1px] bg-gray-200 " />
      <div>
        <div className=" max-w-3xl pl-14 pb-3 font-medium">
          <h2 className="text-[22px]  text-[#3D3D3D]">
            Conversational English
          </h2>
          <p className="text-lg text-[#787878]">
            I am an experienced conversational English tutor. Many of my
            students prefer to focus on conversation practice
          </p>
        </div>
        <div className="h-[1px] w-40 bg-gray-200 " />
      </div>
    </div>
  )
}
function SubjectIndex() {
  return (
    <>
      <h1 className="mb-4 mt-3 text-sm font-medium text-[#5F5F5F]  ">
        Business English
      </h1>
      <p className=" mb-6 text-xs   font-medium text-[#787878]">
        I am an experienced conversational English tutor. Many of my students
        prefer to focus on conversation practice
      </p>
      <div className="mx-auto  h-[1px] w-72 rounded-full bg-gray-200 px-4" />
    </>
  )
}
function Title() {
  return (
    <section className="mx-0 mb-6 space-y-2 md:mx-auto">
      <h2 className="text-2xl font-semibold capitalize  tracking-wide text-[#5F5F5F] md:text-3xl">
        Subjects
      </h2>
      <SmallLine />
    </section>
  )
  function SmallLine() {
    return (
      <div className="flex h-[3px] space-x-1   ">
        <div className=" mr-[1px] w-[32px] rounded-full bg-[#FC4D6D]" />
        <div className=" w-[6px] rounded-full bg-[#FC4D6D]" />
        <div className="  w-[6px] rounded-full bg-[#FC4D6D]" />
      </div>
    )
  }
}
