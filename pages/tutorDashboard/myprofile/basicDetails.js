import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { IoMdClose } from 'react-icons/io'
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik'
import SelectWithIcons from '../../../components/TutorDashboardRegistration/SelectWithIcons'

const languageOptions = [
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Gujrati', label: 'Gujrati' },
  { value: 'Marathi ', label: 'Marathi' },
]

function basicDetails() {
  const [languageData, setLanguageData] = useState([])
  const [addLanguageData, setAddLanguageData] = useState([])

  useEffect(() => {
    setLanguageData(languageOptions)
  }, [])
  const initialValues = {
    Qualification: [
      {
        durationTo: '',
        durationFrom: '',
        title: '',
        Type: '',
      },
    ],
    teachs: [
      {
        fee: '',
        teach: '',
        Currency: '',
      },
    ],
  }
  const onSubmit = () => {}

  const languageDataSelect = (value) => {
    setAddLanguageData([...addLanguageData, value])
    const newInput = languageData.filter((item) => item.value !== value)
    setLanguageData(newInput)
  }

  const handleClose = (item, index) => {
    const newInput = [...addLanguageData]
    setLanguageData([...languageData, { label: item, value: item }])
    newInput.splice(index, 1)
    setAddLanguageData(newInput)
  }

  return (
    <>
      <div className=" md-[1px] ml-[1px] mb-[1px] bg-white lg:ml-[30px]  lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
        <div className="  p-5  xl:px-20">
          <h1 className="text-3xl font-semibold">Welcome Yash Mehta,</h1>
          <p>
            Just <span className="font-semibold">2 minutes </span>
            to a beautiful profile of yours, using the information you provide
            below.
          </p>
        </div>
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
          }}
        >
          {({ values }) => {
            return (
              <Form className="my-10 px-5  xl:px-20">
                <div className=" mx-auto  sm:p-4">
                  <div className=" grid grid-cols-2  gap-4 md:gap-9 ">
                    <div className=" col-span-2 grid  grid-cols-1  gap-y-2   md:col-span-1  md:grid-cols-2">
                      <label className="self-center font-semibold ">
                        My Country Of Origin
                      </label>
                      {/* <select className="rounded-[10px] border-2 border-[#C1C1C1] p-2">
                      <option>India</option>
                      <option>India</option>
                      <option>India</option>
                      <option>India</option>
                    </select> */}
                      <SelectWithIcons />
                    </div>
                    <div></div>
                    <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1 md:grid-cols-2">
                      <label className="self-center font-semibold">
                        I Natively Speak
                      </label>
                      <Field as="select" className="rounded-[10px]  border-2 border-[#C1C1C1] p-2">
                        <option>Hindi</option>
                        <option>Hindi</option>
                        <option>Hindi</option>
                      </Field>
                    </div>
                    <div></div>

                    <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1  md:grid-cols-2">
                      <label className="self-center font-semibold">
                        My English Fluency
                      </label>
                      <Field as="select" className="rounded-[10px]  border-2 border-[#C1C1C1] p-2">
                        <option>Expert</option>
                        <option>Expert</option>
                        <option>Expert</option>
                      </Field>
                      <div></div>
                    </div>
                    <div></div>
                    <div className="col-span-2 grid   grid-cols-1 gap-y-2 md:col-span-1  md:grid-cols-2 ">
                      <label className="self-center font-semibold">
                        I Am Also Fluent With..
                      </label>
                      <select
                        name="language"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2 "
                        // {...formik.getFieldProps("skill")}
                        id="language"
                        onChange={(e) => {
                          // setFormskillValue()
                          languageDataSelect(e.target.value)
                          // formik.setFieldValue("skill", e.target.value);
                        }}
                      >
                        <option>Option</option>
                        {languageData?.length &&
                          languageData?.map((item, index) => {
                            return (
                              <option key={index} value={item.value}>
                                {item.label}
                              </option>
                            )
                          })}
                      </select>
                    </div>
                    <div className=" col-span-2 grid  md:col-span-1 md:grid-cols-7 ">
                      <div className=" col-span-7 flex  h-11 gap-x-5 self-center text-sm md:col-span-6">
                        {addLanguageData?.map((item, key) => {
                          return (
                            <div type="reset" key={key}>
                              <span className="flex h-[27px] place-items-center gap-6 rounded bg-[#F6F6F6] px-2.5">
                                {item}
                                <IoMdClose
                                  onClick={(e) => handleClose(item, key)}
                                  className=" my-auto h-auto cursor-pointer stroke-[38px]"
                                />
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className=" col-span-2  ">
                      <FieldArray name="teachs">
                        {({ insert, remove, push }) => (
                          <>
                            {values.teachs?.map((teachs, index) => (
                              <div
                                className="mb-9 grid grid-cols-12 gap-y-9  gap-x-4  md:gap-9"
                                key={index}
                              >
                                <div className="grid-col-1 col-span-6  grid   gap-y-2  md:grid-cols-2">
                                  <label
                                    className="self-center font-semibold"
                                    htmlFor={`teachs.${index}.teach`}
                                  >
                                    {' '}
                                    I Will Like To Teach..
                                  </label>
                                  <Field
                                    as="select"
                                    name={`teachs.${index}.teach`}
                                    placeholder="Jane Doe"
                                    className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                  >
                                    <option>Math</option>
                                    <option>sfgsf</option>
                                    <option>sdfgsd</option>
                                  </Field>
                                </div>
                                <div className="col-span-6 grid grid-cols-1 gap-y-2 md:col-span-5  md:grid-cols-2">
                                  <label
                                    className="self-center font-semibold"
                                    htmlFor={`teachs.${index}.fee`}
                                  >
                                    My Fee Per Hour
                                  </label>
                                  {/* <Field
                                    name={`teachs.${index}.fee`}
                                    placeholder="jane@acme.com"
                                    as="select"
                                    className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                  >
                                    {' '}
                                    <option>
                                      750 INR
                                    </option>
                                    <option>514 INR</option>
                                    <option>651 INR</option>
                                  </Field> */}
                                  <div className="relative mt-1 rounded-[10px] shadow-sm h-full border-2 border-[#C1C1C1] p-2">
                                    <Field
                                      type="text"
                                      name={`teachs.${index}.fee`}
                                      id={`teachs.${index}.fee`}
                                      className="block h-full w-full rounded-md border-gray-300  focus:outline-none"
                                      placeholder="000  "
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                      <label
                                        htmlFor="currency"
                                        className="sr-only"
                                      >
                                        Currency
                                      </label>
                                      <select
                                        id={`teachs.${index}.Currency`}
                                        name={`teachs.${index}.Currency`}
                                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-3 font-bold text-gray-500  sm:text-sm"
                                      >
                                        <option>INR</option>
                                        <option>CAD</option>
                                        <option>EUR</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div className=" col-span-3 col-start-10 flex justify-between xl:gap-8 lg:gap-3 md:col-span-1 ">
                                  <button
                                    type="button"
                                    onClick={() => push({ fee: '', teach: '' })}
                                  >
                                    <RiAddFill className="text-2xl text-[#7D7D7D]" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={index<=0? null :() => remove(index)}
                                  >
                                    <RiDeleteBinLine className="text-xl text-[#7D7D7D]" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                  <FieldArray name="Qualification">
                    {({ insert, remove, push }) => (
                      <>
                        {values.Qualification?.map((Qualification, index) => (
                          <div
                            className="mt-9 grid grid-cols-12 gap-3 bg-[#F2F2F2] p-4 md:gap-x-8 md:p-[26px]"
                            key={index}
                          >
                            <div className="col-span-5 md:col-span-3">
                              <p
                                className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold "
                                name={`Qualification.${index}.Type`}
                              >
                                Qualification Type
                              </p>
                              <Field
                                as="select"
                                name={`Qualification.${index}.Type`}
                                className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                              >
                                <option>Experience</option>
                                <option>Certificate</option>
                                <option>Degree</option>
                              </Field>
                            </div>
                            <div className="order-2 col-span-10 md:order-none md:col-span-5">
                              <p
                                className="mb-5 font-semibold  "
                                name={`Qualification.${index}.title`}
                              >
                                Qualification Title
                              </p>
                              <Field
                                type="text"
                                name={`Qualification.${index}.title`}
                                className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                              />
                            </div>
                            <div className="col-span-7 md:col-span-3">
                              <p className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                                Qualification Duration
                              </p>
                              <div className="flex gap-1.5">
                                <Field
                                  as="select"
                                  name={`Qualification.${index}.durationFrom`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                >
                                  <option>From</option>
                                  <option>2002</option>
                                  <option>2001</option>
                                </Field>
                                <Field
                                  as="select"
                                  name={`Qualification.${index}.durationTo`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                >
                                  <option>To</option>
                                  <option>2005</option>
                                  <option>2006</option>
                                </Field>
                              </div>
                            </div>
                            <div className="order-last col-span-1 mt-11 self-center justify-self-center md:order-none">
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                <RiDeleteBinLine className="text-xl text-[#7D7D7D]" />
                              </button>
                            </div>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              durationTo: '',
                              durationFrom: '',
                              title: '',
                              Type: '',
                            })
                          }
                          className="mx-auto flex gap-x-2 p-4 font-bold text-[#2294CD]  "
                        >
                          <IoMdAddCircleOutline className="self-center text-[#7D7D7D]" />
                          Add Additional Qualification
                        </button>
                      </>
                    )}
                  </FieldArray>

                  <div className="my-12 text-right">
                    <button className="w-full rounded-lg bg-[#FC4D6D] py-2.5 px-4 text-white sm:w-auto ">
                      Save and Next
                    </button>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </>
  )
}

export default basicDetails
