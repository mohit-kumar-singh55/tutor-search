import moment from 'moment';
import { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utils/cookies';

function Resume() {
  const [user_data, set_user_data] = useState(null)

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  return (
    <div className="  font-poppins md:bg-white">
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
export default Resume

function Mobile({ user_data }) {
  const [education, setEducation] = useState(true)
  //   const [resume, setResume] = useState('education')

  return (
    // md:hidden
    <div className=" my-10 mx-auto px-6  sm:w-[376px] md:hidden  ">
      <ResumeTitle user_data={user_data} />
      <select
        // value={}
        onChange={() => setEducation(!education)}
        className="mt-6 w-full rounded-lg border-2 bg-white py-2 px-4 text-sm text-[#9A9A9A] outline-none"
      >
        <option value="education">
          Education
        </option>
        <option value="Certification">
          Certification
        </option>
      </select>
      {
        education
          ? <Education user_data={user_data} />
          : <Certifications user_data={user_data} />


      }


    </div>
  )
}

function ResumeTitle() {
  return (
    <section className="mx-0 space-y-2 md:mx-auto">
      <h2 className="text-2xl font-semibold capitalize tracking-wide text-[#5F5F5F]">
        Resume
      </h2>
      <SmallLine />
    </section>
  )
}
function Desktop({ user_data }) {
  const [education, setEducation] = useState(true)
  // const [certification, setCertification] = useState(false)
  const activeLink =
    'relative cursor-pointer text-[#FC4D6D] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-8 after:rounded-full after:bg-[#FC4D6D]'
  return (
    <div className=" hidden space-y-6  py-16 capitalize md:block">
      <div className="ml-3 mb-12 flex justify-center">
        <ResumeTitle />
      </div>
      <section className="flex justify-center gap-4   ">
        <div className="mr-16 mt-4 space-y-10 font-medium capitalize text-[#5F5F5F] ">
          <div className="text-2xl ">Duration</div>
          {
            education
              ?
              user_data.education_certificates && user_data.education_certificates.map(function (dd) {
                return (
                  <>
                    <div className="text-lg">{moment(dd.year_of_study.from).format("YYYY")} - {moment(dd.year_of_study.to).format("YYYY")}</div>
                    <div className="text-lg">{dd.university}</div>
                  </>
                )
              })
              : user_data.teaching_certificates.map(function (dd) {
                return (
                  <>
                    <div className="text-lg">{moment(dd.year_of_study.from).format("YYYY")} - {moment(dd.year_of_study.to).format("YYYY")}</div>
                    <div className="text-lg">{dd.certificate_title}</div>
                  </>
                )
              })
          }
        </div>
        <div className="h-56 w-[1px] rounded-full bg-[#DADADA] " />
        <div className="ml-20 w-96 space-y-10">
          <div className=" mt-4 space-x-12 text-2xl font-medium capitalize text-[#5F5F5F]">
            <span
              onClick={() => setEducation(!education)}
              className={`cursor-pointer ${education && activeLink}`}
            >
              Education
            </span>
            <span
              onClick={() => setEducation(!education)}
              className={`cursor-pointer ${!education && activeLink}`}
            >
              Certifications
            </span>
          </div>
          {education ?
            user_data.education_certificates && user_data.education_certificates.map(function (dd) {
              return (
                <div className="text-lg text-[#787878] ">
                  {dd.university}, {dd.degree}, {dd.specialization}
                </div>
              )
            }) : (
              user_data.teaching_certificates.map(function (dd) {
                return (
                  <div className="text-lg text-[#787878] ">
                    {dd.certificate_title}, {dd.description}, {dd.issued_by}
                  </div>
                )
              })
            )}
        </div>
      </section>
    </div>
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

function Education({ user_data }) {
  return (
    <div className=" my-4  w-80 space-y-4 px-4 font-poppins text-sm font-medium  capitalize ">
      <h2 className="text-[#251f1f]">Education</h2>
      <section className="space-y-2">
        {
          user_data.education_certificates && user_data.education_certificates.map(function (dd) {
            return (
              <>
                <h2 className=" text-[#5F5F5F]">{moment(dd.year_of_study.from).format("YYYY")} - {moment(dd.year_of_study.to).format("YYYY")}</h2>
                <p className="text-[#787878]">
                  {dd.university}, {dd.degree}, {dd.specialization}
                </p>
                <hr />
              </>
            )
          })
        }

      </section>
      {/* <hr />
      <section className="space-y-2">
        <h2 className=" text-[#5F5F5F]">2020 — 2020</h2>
        <p className="text-[#787878]">
          Teaching English as a foreign Language TEFL
        </p>
      </section> */}
    </div>
  )
}

function Certifications({ user_data }) {
  return (
    <div className=" my-4  w-80 space-y-4 px-4 font-poppins text-sm font-medium  capitalize ">
      <h2 className="text-[#251f1f]">Certifications</h2>

      <section className="space-y-2">
        {
          user_data.teaching_certificates.map(function (dd) {
            return (
              <>
                <h2 className=" text-[#5F5F5F]">{moment(dd.year_of_study.from).format("YYYY")} - {moment(dd.year_of_study.to).format("YYYY")}</h2>
                <p className="text-[#787878]">
                  {dd.certificate_title}, {dd.description}, {dd.issued_by}
                </p>
                <hr />
              </>
            )
          })
        }
      </section>
      {/* <hr />
      <section className="space-y-2">
        <h2 className=" text-[#5F5F5F]">2020 — 2020</h2>
        <p className="text-[#787878]">
          Teaching English as a foreign Language TEFL
        </p>
      </section> */}
    </div>
  )
}
