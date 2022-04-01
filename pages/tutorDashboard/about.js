import { useEffect, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { getLocalStorage, updateUser } from '../../utils/cookies'
import { Formik, Field, FieldArray, Form } from 'formik'
import Server from '../../utils/Server'
import { updateUserAbout, uploadUserBackgroundPic } from '../../utils/constants'

function About() {
  const [user_data, set_user_data] = useState({})
  const [background_img, set_background_img] = useState()

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  const handleSubmit = async (data) => {
    data.background_pic = background_img;
    const user_update = await Server.put(updateUserAbout, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('photo')
      })
    }
  }

  const handleChange = async (acceptedFiles) => {
    let data = new FormData()
    if (acceptedFiles) {
      data.append('profile_pic', acceptedFiles, acceptedFiles.name)
      const response = await Server.post(uploadUserBackgroundPic, data)
      if (response.success) {
        set_background_img(response.data.file_name)
      }
    }
  }

  return (
    <div className=" pb-8  ">
      <style jsx>
        {`
          body {
            background-color: blue;
          }
        `}
      </style>
      <div className="px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        About
      </div>
      <hr />
      <Formik
        initialValues={
          user_data
            ? {
              name: user_data.name,
              email: user_data.email,
              language_spoken: user_data.language_spoken,
              country: user_data.country,
              subject_taught_id: user_data.subject_taught_id,
              hourly_rate: user_data.hourly_rate,
              teaching_experience_id: user_data.teaching_experience_id,
              current_situation_id: user_data.current_situation_id,
              country_code: user_data.country_code,
              number: user_data.number,
              eighteen_plus: user_data.eighteen_plus,
              background_pic_title: user_data.background_pic_title,
            }
            : {}
        }
        onSubmit={async (values) => {
          handleSubmit(values)
        }}
        enableReinitialize
        render={({ values }) => (
          <Form>
            <div className="p-5 md:px-16">
              <div className="mb-8 flex  flex-col gap-8 ">
                <Name />
                <Email />
                <Country />
                <LanguageAndLevel values={values} />
                <Subject />
                <HourlyRate />
                <TeachingExperienceDesc />
                {/* <CurrentSituationDesc /> */}
                {/* <CountryCode />
                <Number /> */}
                <Age />
                <BackgroundImage
                  background_pic={
                    background_img ? background_img : user_data?.background_pic
                  }
                  handleChange={(e) => handleChange(e)}
                />
                <BackgroundImageTitle />
              </div>
              <button type="submit">
                <a className="tutor-dashboard-btn   md:inline-flex  ">next</a>
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

export default About

const Name = () => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      first name
    </label>
    <Field
      className="tutor-dashboard-input-style "
      type="text"
      placeholder="John Doe"
      id="name"
      name="name"
      required
    />
  </div>
)
const Email = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      email
    </label>
    <Field
      className="tutor-dashboard-input-style"
      type="email"
      name="email"
      id="email"
      placeholder="johnsmith@gmail.com"
      required
    />
  </div>
)
const Country = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      country of origin
    </label>
    {/* <input
      className="tutor-dashboard-input-style"
      type="text"
      placeholder="india"
    /> */}
    <Field
      as="select"
      id="country"
      name="country"
      className=" cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value="">Select </option>
      <option value="America">America </option>
      <option value="Pakistan">Pakistan </option>
      <option value="India">India </option>
    </Field>
  </div>
)
const LanguageAndLevel = ({ values }) => {
  return (
    <div className="grid gap-3">
      {/* language */}
      <div className="tutors-input-n-label-style">
        {/* <input
        type="text"
        placeholder="english"
        className="tutor-dashboard-input-style"
      /> */}
        <FieldArray
          name={'language_spoken'}
          render={(arrayHelpers) => (
            <div>
              {values?.language_spoken && values?.language_spoken.length > 0 ? (
                values?.language_spoken.map((language, index) => {
                  return (
                    <>
                      <div key={index} className="flex flex-row">
                        <div className="tutors-input-n-label-style flex flex-col">
                          <label
                            htmlFor=""
                            className="tutor-dashboard-label-style"
                          >
                            language spoken
                          </label>
                          <Field
                            as="select"
                            id={`language_spoken.${index}.language_id`}
                            name={`language_spoken.${index}.language_id`}
                            className="cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto text-[#9E9E9E] outline-none md:w-96 "
                          >
                            <option value={""}>Select </option>
                            <option value={1}>English </option>
                            <option value={2}>Hindi </option>
                            <option value={3}>Marathi </option>
                          </Field>
                        </div>
                        <div className="tutors-input-n-label-style flex flex-col">
                          <label
                            htmlFor=" "
                            className="tutor-dashboard-label-style"
                          >
                            level
                          </label>
                          <Field
                            as="select"
                            id={`language_spoken.${index}.language_level_id`}
                            name={`language_spoken.${index}.language_level_id`}
                            className="cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto text-[#9E9E9E] outline-none md:w-96 "
                          >
                            <option value={""}>Select</option>
                            <option value={1}>Native / Bilingual Proficiency</option>
                            <option value={2}>Limited Working Proficiency</option>
                            <option value={3}>Full Professional Proficiency</option>
                          </Field>
                        </div>
                        {
                          index
                            ?
                            <a className="" href="/" onClick={(e) => { e.preventDefault(); arrayHelpers.remove(index) }} >
                              -
                            </a>
                            :
                            <a className="" href="/" onClick={(e) => { e.preventDefault(); arrayHelpers.insert(index, '') }} >
                              +
                            </a>
                        }
                      </div>
                    </>
                  )
                })
              ) : (
                <button type="button" onClick={() => arrayHelpers.push('')}>
                  {/* show this when user has removed all friends from the list */}
                  <a className="-mt-2 text-sm font-medium capitalize text-[#42ADE2]">
                    add another language
                  </a>
                </button>
              )}
            </div>
          )}
        />
      </div>
      {/* level */}
      {/* <div className="tutors-input-n-label-style flex flex-col">
        <label htmlFor=" " className="tutor-dashboard-label-style">
          level
        </label>
        <input
          type="text "
          className="tutor-dashboard-input-style"
          placeholder="c1"
        />
      </div> */}
    </div>
  )
}
const Subject = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      subject Taught
    </label>

    <Field
      as="select"
      multiple
      id="subject_taught_id"
      name="subject_taught_id"
      className="cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value={1}>Math </option>
      <option value={2}>English </option>
      <option value={3}>Science </option>
    </Field>
  </div>
)
const HourlyRate = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      Hourly Rate
    </label>
    <div className="space-x-4">
      <Field
        className="tutor-dashboard-input-style w-28"
        type="text"
        placeholder="5"
        id="hourly_rate"
        name="hourly_rate"
      />
      <span>$</span>
    </div>
    <p className="mt-1 text-[13px] capitalize leading-4">
      new tutor charge $8 for this subject to get students faster. You can
      change your Rate any time
    </p>
  </div>
)

const TeachingExperienceDesc = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      describe your teaching experience
    </label>

    <Field
      as="select"
      id="teaching_experience_id"
      name="teaching_experience_id"
      className=" cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option>Select</option>
      <option value="1" defaultChecked>i have tought in an informal setting </option>
      <option value="2">
        Qualified TEFL Tutor And Accent Coach With Experience!
      </option>
    </Field>
  </div>
)
const CurrentSituationDesc = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      describe your current situation
    </label>
    <Field
      as="select"
      id="current_situation_id"
      name="current_situation_id"
      className="cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value={1}>Math </option>
      <option value={2}>English </option>
      <option value={3}>Science </option>
    </Field>
  </div>
)

const CountryCode = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      country code <span className="text-gray-4 opacity-40">(optional)</span>
    </label>
    <div className="flex items-center gap-2 overflow-hidden rounded-xl border-2 bg-white px-2 ">
      <div className="relative  h-5 w-5 ">
        <Image
          src="/Images/TutorsDashboard/country-Flag.png"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <Field
        className="border-none py-3 px-2 text-[#545454]  outline-none  "
        type="text"
        id="country_code"
        name="country_code"
      />
    </div>
  </div>
)

const Number = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      phone number <span className="text-gray-4 opacity-40">(optional)</span>
    </label>
    <div className="flex items-center gap-3">
      <Field
        className="tutor-dashboard-input-style"
        type="text"
        id="number"
        name="number"
      />
    </div>
    <p className="mt-1 capitalize leading-4 tracking-wider">
      receive <span className="uppercase">sms</span>-notification about the new
      message from students.
    </p>
  </div>
)

const Age = () => (
  <div className="space-y-2">
    {/* <label htmlFor="" className="tutor-dashboard-label-style">
      age
    </label> */}
    <div className="flex items-center gap-3">
      <Field
        type="checkbox"
        name="eighteen_plus"
        id="eighteen_plus"
        className=" h-6 w-6 border-2 border-gray-300 bg-blue-200 "
      />
      <span className="capitalize">i confirm i'm over 18</span>
    </div>
  </div>
)

const BackgroundImage = (props) => (
  <div className="flex w-full flex-col gap-4 bg-[#F2F2F2] p-5 md:px-16">
    <div className="text-lg capitalize">
      upload your background image to increase the credibility of your profile
    </div>
    <div className="flex items-center gap-2">
      <input
        type="file"
        className="rounded-lg border-[1px] border-[#FC4D6D]  py-3 px-6 text-sm font-medium  capitalize"
        onChange={(e) => props.handleChange(e.target.files[0])}
      />
      {/* <div className="rounded-lg border-[1px] border-[#FC4D6D]  py-3 px-6 text-sm font-medium  capitalize">
        upload a photo
      </div> */}
    </div>
    <div className="text-xs">
      <div className="">JPG or PNG format</div>
      <div>Maximum size - 2MB.</div>
    </div>
    {props.background_pic ? (
      <section className="flex gap-2">
        <div className="h-[106px] w-[106px] bg-blue-300">
          <img
            src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${props.background_pic}`}
            alt="img"
          />
        </div>
        {/* <div className="h-[106px] w-[106px] bg-blue-300">
                    <img src="" alt="img" />
                  </div>
                  <div className="h-[106px] w-[106px] bg-blue-300">
                    <img src="" alt="img" />
                  </div> */}
      </section>
    ) : null}
  </div>
)

const BackgroundImageTitle = () => (
  <div className="space-y-2">
    <label htmlFor="" className="tutor-dashboard-label-style">
      Background Image Title
    </label>
    <div className="flex items-center gap-2 overflow-hidden rounded-xl border-2 bg-white px-2 ">
      <Field
        className="border-none py-3 px-2 text-[#545454]  outline-none  "
        type="text"
        id="background_pic_title"
        name="background_pic_title"
      />
    </div>
  </div>
)
