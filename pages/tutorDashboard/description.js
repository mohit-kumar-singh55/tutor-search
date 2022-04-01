import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Formik, Field, Form } from 'formik'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn'
import { baseUrlProfilePic, updateUserDescription } from '../../utils/constants'
import { getLocalStorage, updateUser } from '../../utils/cookies'
import Server from '../../utils/Server'

function Description() {
  const [user_data, set_user_data] = useState({})

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  const handleSubmit = async (data) => {
    const user_update = await Server.put(updateUserDescription, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('video')
      })
    }
  }

  return (
    <div>
      <div className="px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        profile description
      </div>
      <hr />
      <Formik
        initialValues={
          user_data
            ? {
              headline: user_data.headline,
              introduction: user_data.introduction,
              teaching_experience: user_data.teaching_experience,
              motivation_line: user_data.motivation_line,
            }
            : {}
        }
        onSubmit={async (values) => {
          handleSubmit(values)
        }}
        enableReinitialize
      >
        <Form>
          <main className="mb-8 flex flex-col gap-8 p-8   font-roboto text-[#545454] md:px-16">
            {/* 1 */}
            <div className="text-sm capitalize text-[#545454] ">
              update or creat a new profile headline and description. it will
              appear on tour tutor card on the “find tutors” page.
            </div>
            <StudentDescription user_data={user_data} />
            <div className="space-y-2">
              <Field
                type="text"
                id="headline"
                name="headline"
                placeholder="write your headline in english"
                className="tutor-dashboard-input-style"
                required
              />
              <div className="capitalize text-[#8F8F8F]">
                good example: “ certified tutor with 5 years of experience”
              </div>
            </div>
            {/* 4 */}
            <IntroductionAndInterest />
            <ExperienceCertificationMethodology />
            <Trial />
            <div className="text-[#8F8F8F]">
              400 character minimum. 0 character currently
            </div>
            <NextAndBackBtn
              nextButtonType="submit"
              onNextClick={() => { }}
              onBackClick={() => Router.push('education')}
            />
          </main>
        </Form>
      </Formik>
    </div>
  )
}

export default Description

const StudentDescription = ({ user_data }) => (
  <div className="flex flex-col gap-3">
    <div className="text-2xl  font-medium capitalize text-[#545454]">
      description for students
    </div>
    <div className="h-36 w-36 overflow-hidden rounded-md  bg-gray-200">
      <img
        src={user_data ? baseUrlProfilePic + user_data.profile_img : ''}
        alt="img"
      />
    </div>
    <div className="text-2xl  font-medium capitalize text-[#545454]">
      {user_data.name}
    </div>
  </div>
)

const IntroductionAndInterest = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      introduce yourself and share briefly about your interest
    </label>
    <Field
      className="tutor-dashboard-input-style h-52"
      as="textarea"
      id="introduction"
      name="introduction"
      rows="7"
      required
    // placeholder="hello, my name is ...and i’m from... "
    />
  </div>
)

const ExperienceCertificationMethodology = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      describe your teaching experience, certification an methodology
    </label>
    <Field
      className="tutor-dashboard-input-style h-52"
      as="textarea"
      id="teaching_experience"
      name="teaching_experience"
      rows="7"
      required
    // placeholder="hello, my name is ...and i’m from... "
    />
  </div>
)
const Trial = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      motivate students to book a trial lesson with you
    </label>
    <Field
      className="tutor-dashboard-input-style"
      as="textarea"
      id="motivation_line"
      name="motivation_line"
      rows="7"
      required
    // placeholder="hello, my name is ...and i’m from... "
    />
  </div>
)
