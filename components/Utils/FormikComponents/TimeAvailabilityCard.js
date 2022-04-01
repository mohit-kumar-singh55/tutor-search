import React, { useState } from 'react'
import FormikControl from './FormikControl'
import { Field, FieldArray } from 'formik'
import { WiDayHaze } from 'react-icons/wi'
import { BsSun, BsCloudMoon } from 'react-icons/bs'
import nightIcon from '../../../public/Images/nightIcon.png'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import Image from 'next/image'

function TimeAvailabilityCard({ weekName, name, formik }) {

  const [indexValue, setIndexValue] = useState(0)

  const timeHandler = (value) => {
    console.log('time', value)

    if (
      value === '7:00 AM' ||  value ===
      '7:30 AM' ||  value ===
      '8:00 AM' ||  value ===
      '9:00 AM' ||  value ===
      '8:30 AM' ||  value ===
      '9:30 AM' || value ===
      '10:00 AM' || value ===
      '10:30 AM' || value ===
      '11:00 AM' || value ===
      '11:30 AM' || value ===
      '5:00 AM' || value ===
      '5:30 AM' || value ===
      '6:00 AM' || value ===
      '6:30 AM'
    ) {
      console.log('morning')
      setIndexValue(0)
    } else if (
      value === '12:00 PM' ||value ===
      '12:30 PM' ||value ===
      '1:00 PM' ||value ===
      '1:30 PM' ||value ===
      '2:30 PM' ||value ===
      '3:30 PM' ||value ===
      '3:00 PM' ||value ===
      '2:00 PM' ||value ===
      '4:00 PM' ||value ===
      '4:30 PM'
    ) {
      console.log('afternoon')

      setIndexValue(1)
    } else if (
      value === '5:00 PM' ||value ===
      '5:30 PM' ||value ===
      '6:00 PM' ||value ===
      '6:30 PM' ||value ===
      '7:30 PM' ||value ===
      '8:30 PM' ||value ===
      '7:00 PM' ||value ===
      '8:00 PM' ||value ===
      '9:00 PM' ||value ===
      '9:30 PM' ||value ===
      '10:30 PM' ||value ===
      '10:00 PM'
    ) {
      console.log('evening')

      setIndexValue(2)
    } else if (
      value === '11:00 PM' ||
      '11:30 PM' ||
      '12:00 AM' ||
      '12:30 AM' ||
      '1:30 AM' ||
      '2:30 AM' ||
      '1:00 AM' ||
      '2:00 AM' ||
      '3:00 AM' ||
      '3:30 AM' ||
      '4:00 AM' ||
      '4:30 AM'
    ) {
      console.log('night')

      setIndexValue(3)
    }
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-10 bg-[#F2F2F2]  p-6">
        {/* <div className="col-span-2 flex md:flex-row flex-col md:justify-between"> */}
        <p className="col-span-2 text-lg font-medium md:col-span-1">
          {weekName}
        </p>
        <div className="order-2 col-span-2 flex justify-between gap-x-5 md:order-none md:col-span-1 md:justify-end">
          <p className="self-center font-medium">Copy Below Timings For</p>

          <select className=" w-auto rounded-[10px] border border-[#C1C1C1] px-4  py-1 text-[#494949]">
            <option className="hidden " disabled selected>
              Select Days
            </option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>
        {/* </div> */}

        <FieldArray name={name} className="col-span-2">
          {({ push, handleRemove,form }) => {
            const cardName = form.values[name]
            console.log('cardName', cardName)
          
            return (
              <>
                {cardName.map((item, index ) => (
                  <div className='md:col-span-1 col-span-2' key={index}>
                    {indexValue === 0 ? (
                      <WiDayHaze className="text-3xl text-[#7D7D7D]" />
                    ) : indexValue === 1 ? (
                      <BsSun className="mb-1 text-2xl text-[#7D7D7D]" />
                    ) : indexValue === 2 ? (
                      <BsCloudMoon className="mb-1 text-2xl text-[#7D7D7D]" />
                    ) : 
                      indexValue ===3 ? (
                        <div className="h-7 w-7">
                          <Image src={nightIcon} alt="" />
                        </div>
                      ) :  <WiDayHaze className="text-3xl text-[#7D7D7D]" />
                    }

                    <div className="flex gap-4 ">
                      <div className=" w-full">
                        <Field
                          as="select"
                          name={`${cardName}.${index}.from`}
                          // value={item.from}
                          className=" w-full rounded-[10px] border border-[#C1C1C1] p-3 "
                          // onChange={(e) => {timeHandler(e.target.value);}}
                        >
                          <option value="5:00 AM">5:00 AM</option>
                          <option value="5:30 AM">5:30 AM</option>
                          <option value="6:00 AM">6:00 AM</option>
                          <option value="6:30 AM">6:30 AM</option>
                          <option value="7:00 AM">7:00 AM</option>
                          <option value="7:30 AM">7:30 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:30 PM">1:30 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:30 PM">3:30 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="5:30 PM">5:30 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                          <option value="6:30 PM">6:30 PM</option>
                          <option value="7:00 PM">7:00 PM</option>
                          <option value="12:00 AM">12:00 AM</option>
                          <option value="1:30 AM">1:30 AM</option>
                          <option value="2:00 AM">2:00 AM</option>
                          <option value="3:30 AM">3:30 AM</option>
                        </Field>
                      </div>
                      <label className="my-auto font-bold">To</label>
                      <div className=" w-full">
                        <Field
                          as="select"
                          name={`${cardName}.${index}.to`}
                          value={item.to}
                          className=" w-full rounded-[10px] border  border-[#C1C1C1] p-3 "
                        >
                          <option>7:00 AM </option>
                          <option>7:30 AM </option>
                          <option>8:00 AM </option>
                          <option>8:30 AM </option>
                          <option>9:00 AM </option>
                          <option>9:30 AM </option>
                        </Field>
                      </div>
                      <button type="button">
                        <RiDeleteBinLine
                          className="text-xl"
                          onClick={() => { console.log('index', index); handleRemove(index)}}
                        />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => push({ from: '', to: '' })}
                  className="order-4 col-span-2 flex gap-x-2 font-bold  text-[#2294CD] md:order-none md:col-span-1 md:mx-auto "
                >
                  <IoMdAddCircleOutline className="my-auto text-xl text-[#7D7D7D]" />
                  <p className="my-auto">Add Additional Time Slot</p>
                </button>
              </>
            )
          }}
        </FieldArray>
      </div>
    </>
  )
}

export default TimeAvailabilityCard
