import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn'
import { getLocalStorage, updateUser } from '../../utils/cookies'
import { updateUserEducation } from '../../utils/constants'
import { Formik, Field, FieldArray, Form } from 'formik'
import Server from '../../utils/Server'

function Education() {
  const [user_data, set_user_data] = useState()

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  const handleSubmit = async (data) => {
    const user_update = await Server.put(updateUserEducation, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('description')
      })
    }
  }


  return (
    <div>
      <div className="px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        Education
      </div>
      <hr />
      <main className="mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
        {/* 1 */}
        <div className="text-sm capitalize text-[#545454] ">
          tell students more about the higher education that you’ve completed or
          are working on
        </div>
      </main>

      <Formik
        initialValues={
          user_data
            ? {
              education_certificates: user_data.education_certificates
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
              name={`education_certificates`}
              render={(arrayHelpers) => (
                <div>
                  {
                    values?.education_certificates && values?.education_certificates.length > 0
                      ?
                      (
                        values?.education_certificates.map(function (certD, index) {
                          return (
                            <div>
                              <main className="mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
                                <University index={index} certD={certD} />
                                <Degree index={index} certD={certD} />
                                <DegreeType index={index} certD={certD} />
                                <Specialization index={index} certD={certD} />
                                <YearOfStudy index={index} certD={certD} />
                              </main>
                              {/* <UploadPhoto /> */}
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
                      add another education
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
                onBackClick={() => Router.push('certification')}
              />
            </main>
          </Form>
        )}
      />


    </div>
  )
}

export default Education

const University = ({ index, certD }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      university
    </label>
    <Field
      type="text"
      id={`education_certificates.${index}.university`}
      name={`education_certificates.${index}.university`}
      value={certD.university}
      className="rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    />
  </div>
)
const Degree = ({ index, certD }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      degree
    </label>
    <Field
      id={`education_certificates.${index}.degree`}
      name={`education_certificates.${index}.degree`}
      value={certD.degree}
      className="tutor-dashboard-input-style "
      type="text" />
  </div>
)
const DegreeType = ({ index, certD }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      Degree Type
    </label>
    <Field
      id={`education_certificates.${index}.degree_type`}
      name={`education_certificates.${index}.degree_type`}
      value={certD.degree_type}
      className="tutor-dashboard-input-style "
      type="text" />
  </div>
)
const Specialization = ({ index, certD }) => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      Specialization
    </label>
    <Field
      id={`education_certificates.${index}.specialization`}
      name={`education_certificates.${index}.specialization`}
      value={certD.specialization}
      className="tutor-dashboard-input-style "
      type="text" />
  </div>
)
const YearOfStudy = ({ index, certD }) => (
  <div className="tutors-input-n-label-style    ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      year of study
    </label>
    <div className="grid  grid-cols-2 gap-6">
      <div className="flex  w-80 items-center  gap-2 md:w-96 ">
        <Field
          as="select"
          id={`education_certificates.${index}.year_of_study.from`}
          name={`education_certificates.${index}.year_of_study.from`}
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
          id={`education_certificates.${index}.year_of_study.to`}
          name={`education_certificates.${index}.year_of_study.to`}
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
  <div className="flex w-full flex-col gap-8 bg-[#F2F2F2]  p-5 md:px-16">
    <div className="text-lg capitalize">
      upload your diploma to boost your credibility!
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
      <span className="capitalize">i don’t have a higher education degree</span>
    </div>
  </div>
)
