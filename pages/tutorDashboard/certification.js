import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn'
import { SUBJECTS, updateUserCertificate } from '../../utils/constants'
import { getLocalStorage, updateUser } from '../../utils/cookies'
import Server from '../../utils/Server'
import { Formik, Field, FieldArray, Form } from 'formik'

function Certification() {
  const [user_data, set_user_data] = useState()

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  const handleSubmit = async (data) => {
    const user_update = await Server.put(updateUserCertificate, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('education')
      })
    }
  }

  return (
    <div className="mb-8">
      <div className=" px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        teaching certification
      </div>
      <hr />
      <main className="mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
        {/* 1 */}
        <div className="text-sm capitalize text-[#545454] ">
          do you have teaching certificates? if so, describe them to enhance
          your profile credibility and get more students
        </div>
      </main>
      <Formik
        initialValues={
          user_data
            ? {
              teaching_certificates: user_data.teaching_certificates
            }
            : {}
        }
        onSubmit={async (values) => {
          handleSubmit(values)
        }}
        enableReinitialize
        render={({ values }) => (
          <Form>
            <FieldArray
              name={`teaching_certificates`}
              render={(arrayHelpers) => (
                <div>
                  {
                    values?.teaching_certificates && values?.teaching_certificates.length > 0
                      ?
                      (
                        values?.teaching_certificates.map(function (certD, index) {
                          return (
                            <div>
                              <main className="mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
                                <Subject index={index} certD={certD} />
                                <Certificate index={index} certD={certD} />
                                <Description index={index} certD={certD} />
                                <IssuedBy index={index} certD={certD} />
                                <YearOfStudy index={index} certD={certD} />
                                {/* <UploadPhoto /> */}
                              </main>
                              <hr />
                            </div>
                          )
                        })
                      )
                      :
                      null
                  }
                  <button type="button" className='flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16' onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    <a className="-mt-2 text-sm font-medium capitalize text-[#42ADE2]">
                      add another certificate
                    </a>
                  </button>
                </div>
              )}
            />
            <main className="mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
              {/* <CheckBox /> */}
              <NextAndBackBtn
                nextButtonType={"submit"}
                onNextClick={() => console.log("submit")}
                onBackClick={() => Router.push('photo')}
              />
            </main>
          </Form>
        )}
      />
    </div>
  )
}

export default Certification

const Subject = ({ index }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      Subject
    </label>
    <Field
      as="select"
      id={`teaching_certificates.${index}.subject_id`}
      name={`teaching_certificates.${index}.subject_id`}
      className="rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value="">Select</option>
      <option value="1">English</option>
      <option value="2">Maths</option>
      <option value="3">Hindi</option>
      <option value="4">Physics</option>
    </Field>
  </div>
)
const Certificate = ({ index }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      certificate
    </label>
    <Field
      id={`teaching_certificates.${index}.certificate_title`}
      name={`teaching_certificates.${index}.certificate_title`}
      className="tutor-dashboard-input-style " type="text"
    />
  </div>
)
const Description = ({ index }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      Short Description
    </label>
    <Field
      id={`teaching_certificates.${index}.description`}
      name={`teaching_certificates.${index}.description`}
      className="tutor-dashboard-input-style " type="text"
    />
  </div>
)
const IssuedBy = ({ index }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      issued by
    </label>
    <Field
      id={`teaching_certificates.${index}.issued_by`}
      name={`teaching_certificates.${index}.issued_by`}
      className="tutor-dashboard-input-style " type="text"
    />
  </div>
)
const YearOfStudy = ({ index }) => (
  <div className="tutors-input-n-label-style    ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      year of study
    </label>
    <div className="grid  grid-cols-2 gap-6">
      <div className="flex  w-80 items-center  gap-2 md:w-96 ">
        <Field
          as="select"
          id={`teaching_certificates.${index}.year_of_study.from`}
          name={`teaching_certificates.${index}.year_of_study.from`}
          className="w-full rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value="">Select</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </Field>
        <span>To</span>
        <Field
          as="select"
          id={`teaching_certificates.${index}.year_of_study.to`}
          name={`teaching_certificates.${index}.year_of_study.to`}
          className="w-full rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value="">Select</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </Field>
        <div className="relative h-4 w-4"></div>
      </div>
    </div>
  </div>
)
const UploadPhoto = () => (
  <div className="flex w-full flex-col gap-8 bg-[#F2F2F2] p-5 md:px-16">
    <div className="text-lg capitalize">
      upload your certificate to increase the credibility of your profile
    </div>
    <div className="flex items-center gap-2">
      <div className="rounded-lg border-[1px] border-[#FC4D6D]  py-3 px-6 text-sm font-medium  capitalize">
        upload a photo
      </div>
      <div className="text-xs">
        <div className="">JPG or PNG format</div>
        <div>Maximum size - 2MB.</div>
      </div>
    </div>
  </div>
)

const CheckBox = () => (
  <div className="space-y-2">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        name=""
        id=""
        className=" h-6 w-6 border-2 border-gray-300 bg-blue-200 "
      />
      <span className="capitalize">
        i don’t have any teaching certification yet
      </span>
    </div>
  </div>
)
