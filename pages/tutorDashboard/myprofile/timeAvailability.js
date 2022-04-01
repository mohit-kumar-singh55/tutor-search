import React from 'react'

import { Field, FieldArray, Form, Formik } from 'formik'
import FormikControl from '../../../components/Utils/FormikComponents/FormikControl'
import TimeAvailabilityCard from '../../../components/Utils/FormikComponents/TimeAvailabilityCard'

function timeAvailability() {
  const initialValues = {
    MondayName: [
      {
        from: '',
        to: '',
      },
    ],
    TuesdayName: [
      {
        from: '',
        to: '',
      },
    ],
    WednesdayName: [
      {
        from: '',
        to: '',
      },
    ],
    ThursdayName: [
      {
        from: '',
        to: '',
      },
    ],
    FridayName: [
      {
        from: '',
        to: '',
      },
    ],
    SaturdayName: [
      {
        from: '',
        to: '',
      },
    ],
  }
  const onSubmit = (value) => { console.log('value', value)}
  return (
    <div className='bg-white lg:ml-[30px] ml-[1px] lg:mt-[34px] md-[1px]  lg:mb-[30px] mb-[1px] lg:rounded-2xl'>
      <div className=" p-5  xl:px-20">
        <h1 className="text-3xl font-semibold">Time Availability</h1>
      </div>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          // console.log('Formik props', formik)
          return (
            <Form>
              <div className=" my-10 p-5  xl:px-20">
                <h1 className="text-2xl font-semibold">Set Your Timezone</h1>
                <p className="my-4">
                  A Correct Timezone Is Essential To Coordinate Sessions With
                  International Students
                </p>

                <p className="mt-9 mb-6 font-semibold">
                  {' '}
                  Choose Your Timezone{' '}
                </p>

                <Field
                  as="select"
                  className="w-7/12 rounded-[10px] border border-[#C1C1C1] px-5 py-3 text-[#9E9E9E]"
                >
                  <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                  <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                  <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                </Field>

                <h1 className="mt-12 text-2xl font-semibold">
                  Set Your Availability
                </h1>
                <p className="my-4 capitalize">
                  availability shows your potential working hours.
                  <br />
                  students can book sessions at these time
                </p>
                <div className="space-y-6">
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Monday"
                    name="MondayName"
                    formik={formik}
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Tuesday"
                    name="TuesdayName"
                    formik={formik}

                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Wednesday"
                    name="WednesdayName"
                    formik={formik}

                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Thursday"
                    name="ThursdayName"
                    formik={formik}

                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Friday"
                    name="FridayName"
                    formik={formik}

                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Saturday"
                    name="SaturdayName"
                    formik={formik}

                    />
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default timeAvailability
