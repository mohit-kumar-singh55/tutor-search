import React from 'react'
import  { useEffect, useState } from 'react'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'


import { Form, Formik, Field, FieldArray } from 'formik'
import { BackgroundImage } from '../../../components/Uploadphoto'

const Qualifications = () => {
 
  const [background_img, set_background_img] = useState()

  const handleChange = async (acceptedFiles) => {
    let data = new FormData()
    if (acceptedFiles) {
      data.append('profile_pic', acceptedFiles, acceptedFiles.name)
      // const response = await Server.post(uploadUserBackgroundPic, data)
      // if (response.success) {
        set_background_img(response.data.file_name)
      // }
    }
  }
  const initialValues = {
    qualification: [''],
  }
  const onSubmit = (e) => {console.log('e', e)}
  
  return (
    <div className=' bg-white sm:ml-[30px] sm:mt-[34px] sm:mb-[30px] sm:rounded-2xl '>
        <h1 className='text-3xl mt-3 ml-12  font-semibold text-[#3d3d3d] xl:px-20'>Qualifications</h1>
        <p className='border-b mt-7'></p>
        <div className='bg-[ #F2F2F2]'>
        <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
       
      >
        {(formik) => {
          console.log('Formik props', formik)
          return (
            <Form>
              <div className="className=xs:mx-0 xs:p-0 xs:m-0  sm:mx-auto sm:p-4">
                
                <FieldArray name="qualification">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps
                    const { values } = form
                    const { qualification } = values

                    return (
                      <>
                        {qualification.map((qualification, index) => (
                          <div>
                            <div className="mt-9 grid grid-cols-12 gap-5 sm:bg-[#F2F2F2] p-4 md:gap-x-8 md:p-[26px]">
                              <div
                                className="col-span-6 md:col-span-3"
                                key={index}
                              >
                                <p className="mb-5 xs:text-[13px] sm:text-[16px] sm:overflow-hidden sm:overflow-ellipsis sm:whitespace-nowrap font-semibold ">
                                  Qualification Type
                                </p>
                                <Field
                                  as="select"
                                  name={`qualification.${index}.Type`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                >
                                  <option>experience</option>
                                  <option>certificate</option>
                                  <option>degree</option>
                                </Field>
                              </div>
                              <div className="order-2 col-span-10 md:order-none md:col-span-5">
                                <p className="mb-5 font-semibold xs:text-[13px] sm:text-[16px] ">
                                  Qualification Title
                                </p>
                                <Field
                                  type="text"
                                  name={`qualification.${index}.title`}
                                  className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                />
                              </div>
                              <div className="col-span-6 md:col-span-3">
                                <p className=" xs:text-[13px] sm:text-[16px] mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                                  Qualification Duration
                                </p>
                                <div className="flex gap-1.5">
                                  <Field
                                    as="select"
                                    name={`qualification.${index}.durationFrom`}
                                    className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                  >
                                    <option>From</option>
                                    <option>2002</option>
                                    <option>2001</option>
                                  </Field>
                                  <Field
                                    as="select"
                                    name={`qualification.${index}.durationFrom`}
                                    className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                  >
                                    <option>To</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                  </Field>
                              
                                </div>
                              </div>
                              <div className="order-last col-span-1 mt-11 self-center justify-self-center md:order-none">
                                <button
                                  type="button"
                                  onClick={index > 0 ? () => remove(index) : ''}
                                >
                                  <RiDeleteBinLine className="text-xl " />
                                </button>
                              </div>
                              <div className="order-2 col-span-11 md:order-none ">
                                <p className="mb-5 font-semibold xs:text-[13px] sm:text-[16px] ">
                                 Degree Issuing Institute
                                </p>
                                <Field
                                  type="text"
                                  name={`qualification.${index}.institute`}
                                  className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                />
                              </div>
                              <div className="order-2 col-span-8 md:order-none ">
                              <BackgroundImage
                               background_pic={ background_img }
                                handleChange={(e) => handleChange(e)}
                                />
                              </div>
                              
                                
                              




                            </div>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => push('')}
                          className="mx-auto flex gap-x-2 p-4 font-bold text-[#2294CD] "
                        >
                          <IoMdAddCircleOutline className="self-center" />
                          Add Additional Qualification
                        </button>
                      </>
                    )
                  }}
                </FieldArray>
             
               <div className="text-right my-9">

               <button className="rounded-lg bg-[#FC4D6D] py-2.5 px-4 text-white sm:w-auto w-full ">
              
                 Save and Next
               </button>
               </div>
             </div>
         
            
            </Form>
          )
        }}
      </Formik>
    </>
        </div>
    </div>
  )
}

export default Qualifications