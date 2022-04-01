import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/TutorDashboardRegistration/PageTitle'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import moment from 'moment';
import momentTz from 'moment-timezone';
import { getLocalStorage, updateUser } from '../../utils/cookies';
import { Field, FieldArray, Form, Formik } from 'formik';
import Router from 'next/router'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn';
import { updateUserAvailability } from '../../utils/constants';
import Server from '../../utils/Server';

function getCurrentWeek(add = 0, timezone = 'Asia/Calcutta') {
  var currentDate = momentTz().tz(timezone).add(add, "days");

  var weekStart = currentDate.clone().startOf('isoWeek');
  var weekEnd = currentDate.clone().endOf('isoWeek');

  var days = [];

  for (var i = 0; i <= 6; i++) {
    days.push(momentTz(weekStart).tz(timezone).add(i, 'days').format("DD MMM, YYYY"));
  }
  return days;
}

function Availability() {
  const [timezone, setTimezone] = useState("Asia/Calcutta");
  const [user_data, set_user_data] = useState()

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  const handleSubmit = async (data) => {
    data.timezone = timezone;
    const user_update = await Server.put(updateUserAvailability, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('/tutorDashboard')
      })
    }
  }

  return (
    <>
      <PageTitle title="availability" />
      <hr />
      <main className=" mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
        <p className="text-sm capitalize text-[#545454] ">
          now interoduce yourself a correct timezone is essential to coordinate
          sessions with international students
        </p>
        <h3 className="font-medium capitalize ">choose your timezone</h3>
        <InputTime set_timezone={(val) => setTimezone(val)} />
        <section className="space-y-2 capitalize">
          <h3 className="text-lg font-medium ">set your availability</h3>
          <p className=" text-sm">
            availability shows your potential working hours.students can book
            lessons at these time
          </p>
        </section>
        {
          user_data
            ?
            <Formik
              initialValues={{ availability: user_data.availability }}
              onSubmit={async (values) => {
                handleSubmit(values)
              }}
              enableReinitialize
              render={({ values }) => (
                <Form>
                  {
                    getCurrentWeek(0, timezone).map(function (val, key) {
                      return (
                        <div className="space-y-6" key={key}>
                          <Days day={val} timezone={timezone} values={values} />
                        </div>
                      )
                    })
                  }
                  <CompletedAndBackBtn handleSubmit={() => console.log("submitted")} />
                </Form>
              )}
            />
            :
            null
        }
      </main>
    </>
  )
}

export default Availability

const InputTime = (props) => {
  console.log(momentTz.tz.guess());
  return (
    <select
      id="cars"
      name="cars "
      className=" max-w-xl cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto text-[#9E9E9E] outline-none "
      onChange={(e) => props.set_timezone(e.target.value)}
    >
      <option value="Asia/Calcutta">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
      <option value="Asia/Calcutta">(GMT+05:30) Sri Jayawardenapura</option>
      <option value="Etc/GMT+12">(GMT-12:00) International Date Line West</option>
      <option value="Pacific/Midway">(GMT-11:00) Midway Island, Samoa</option>
      <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
      <option value="US/Alaska">(GMT-09:00) Alaska</option>
      <option value="America/Los_Angeles">(GMT-08:00) Pacific Time (US & Canada)</option>
      <option value="America/Tijuana">(GMT-08:00) Tijuana, Baja California</option>
      <option value="US/Arizona">(GMT-07:00) Arizona</option>
      <option value="America/Chihuahua">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
      <option value="US/Mountain">(GMT-07:00) Mountain Time (US & Canada)</option>
      <option value="America/Managua">(GMT-06:00) Central America</option>
      <option value="US/Central">(GMT-06:00) Central Time (US & Canada)</option>
      <option value="America/Mexico_City">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
      <option value="Canada/Saskatchewan">(GMT-06:00) Saskatchewan</option>
      <option value="America/Bogota">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
      <option value="US/Eastern">(GMT-05:00) Eastern Time (US & Canada)</option>
      <option value="US/East-Indiana">(GMT-05:00) Indiana (East)</option>
      <option value="Canada/Atlantic">(GMT-04:00) Atlantic Time (Canada)</option>
      <option value="America/Caracas">(GMT-04:00) Caracas, La Paz</option>
      <option value="America/Manaus">(GMT-04:00) Manaus</option>
      <option value="America/Santiago">(GMT-04:00) Santiago</option>
      <option value="Canada/Newfoundland">(GMT-03:30) Newfoundland</option>
      <option value="America/Sao_Paulo">(GMT-03:00) Brasilia</option>
      <option value="America/Argentina/Buenos_Aires">(GMT-03:00) Buenos Aires, Georgetown</option>
      <option value="America/Godthab">(GMT-03:00) Greenland</option>
      <option value="America/Montevideo">(GMT-03:00) Montevideo</option>
      <option value="America/Noronha">(GMT-02:00) Mid-Atlantic</option>
      <option value="Atlantic/Cape_Verde">(GMT-01:00) Cape Verde Is.</option>
      <option value="Atlantic/Azores">(GMT-01:00) Azores</option>
      <option value="Africa/Casablanca">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
      <option value="Etc/Greenwich">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
      <option value="Europe/Amsterdam">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
      <option value="Europe/Belgrade">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
      <option value="Europe/Brussels">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
      <option value="Europe/Sarajevo">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
      <option value="Africa/Lagos">(GMT+01:00) West Central Africa</option>
      <option value="Asia/Amman">(GMT+02:00) Amman</option>
      <option value="Europe/Athens">(GMT+02:00) Athens, Bucharest, Istanbul</option>
      <option value="Asia/Beirut">(GMT+02:00) Beirut</option>
      <option value="Africa/Cairo">(GMT+02:00) Cairo</option>
      <option value="Africa/Harare">(GMT+02:00) Harare, Pretoria</option>
      <option value="Europe/Helsinki">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
      <option value="Asia/Jerusalem">(GMT+02:00) Jerusalem</option>
      <option value="Europe/Minsk">(GMT+02:00) Minsk</option>
      <option value="Africa/Windhoek">(GMT+02:00) Windhoek</option>
      <option value="Asia/Kuwait">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
      <option value="Europe/Moscow">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
      <option value="Africa/Nairobi">(GMT+03:00) Nairobi</option>
      <option value="Asia/Tbilisi">(GMT+03:00) Tbilisi</option>
      <option value="Asia/Tehran">(GMT+03:30) Tehran</option>
      <option value="Asia/Muscat">(GMT+04:00) Abu Dhabi, Muscat</option>
      <option value="Asia/Baku">(GMT+04:00) Baku</option>
      <option value="Asia/Yerevan">(GMT+04:00) Yerevan</option>
      <option value="Asia/Kabul">(GMT+04:30) Kabul</option>
      <option value="Asia/Yekaterinburg">(GMT+05:00) Yekaterinburg</option>
      <option value="Asia/Karachi">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
      <option value="Asia/Katmandu">(GMT+05:45) Kathmandu</option>
      <option value="Asia/Almaty">(GMT+06:00) Almaty, Novosibirsk</option>
      <option value="Asia/Dhaka">(GMT+06:00) Astana, Dhaka</option>
      <option value="Asia/Rangoon">(GMT+06:30) Yangon (Rangoon)</option>
      <option value="Asia/Bangkok">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
      <option value="Asia/Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
      <option value="Asia/Hong_Kong">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
      <option value="Asia/Kuala_Lumpur">(GMT+08:00) Kuala Lumpur, Singapore</option>
      <option value="Asia/Irkutsk">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
      <option value="Australia/Perth">(GMT+08:00) Perth</option>
      <option value="Asia/Taipei">(GMT+08:00) Taipei</option>
      <option value="Asia/Tokyo">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
      <option value="Asia/Seoul">(GMT+09:00) Seoul</option>
      <option value="Asia/Yakutsk">(GMT+09:00) Yakutsk</option>
      <option value="Australia/Adelaide">(GMT+09:30) Adelaide</option>
      <option value="Australia/Darwin">(GMT+09:30) Darwin</option>
      <option value="Australia/Brisbane">(GMT+10:00) Brisbane</option>
      <option value="Australia/Canberra">(GMT+10:00) Canberra, Melbourne, Sydney</option>
      <option value="Australia/Hobart">(GMT+10:00) Hobart</option>
      <option value="Pacific/Guam">(GMT+10:00) Guam, Port Moresby</option>
      <option value="Asia/Vladivostok">(GMT+10:00) Vladivostok</option>
      <option value="Asia/Magadan">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
      <option value="Pacific/Auckland">(GMT+12:00) Auckland, Wellington</option>
      <option value="Pacific/Fiji">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
      <option value="Pacific/Tongatapu">(GMT+13:00) Nuku'alofa</option>
    </select>
  )
}
const Days = (props) => {
  let dayName = momentTz(props.day).tz(props.timezone).format("dddd");
  let dayParam = momentTz(props.day).tz(props.timezone).format("ddd").toLocaleLowerCase();
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 ">
        <div className="relative h-4 w-4 ">
          <Image
            src="/Images/ProfilePhoto/blue-tick.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <span className="capitalize">{dayName}</span>
      </div>
      <FieldArray
        name={`availability.${dayParam}`}
        render={(arrayHelpers) => (
          <div>
            {
              props.values?.availability[dayParam] && props.values?.availability[dayParam].length > 0
                ?
                (
                  props.values?.availability[dayParam].map(function (avail, index) {
                    return (
                      <div className="flex items-center gap-2">
                        <Field
                          type="time"
                          id={`availability.${dayParam}.${index}.from`}
                          name={`availability.${dayParam}.${index}.from`}
                          className="w-36 rounded-lg border-2 bg-white py-2 px-4 text-[#A8A2A2] outline-none"
                        />
                        <span>To</span>
                        <Field
                          type="time"
                          id={`availability.${dayParam}.${index}.to`}
                          name={`availability.${dayParam}.${index}.to`}
                          className="w-36 rounded-lg border-2 bg-white py-2 px-4 text-[#A8A2A2] outline-none"
                        />
                        {
                          index
                            ?
                            <a className="relative h-4 w-4" href="/" onClick={(e) => { e.preventDefault(); arrayHelpers.remove(index) }} >
                              <Image
                                src="/Images/TutorsDashboard/minus.png"
                                objectFit="cover"
                                layout="fill"
                              />
                            </a>
                            :
                            <a className="relative h-4 w-4" href="/" onClick={(e) => { e.preventDefault(); arrayHelpers.insert(index, '') }} >
                              <Image
                                src="/Images/TutorsDashboard/plus.svg"
                                objectFit="cover"
                                layout="fill"
                              />
                            </a>
                        }

                      </div>
                    )
                  })
                )
                :
                (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    <a className="-mt-2 text-sm font-medium capitalize text-[#42ADE2]">
                      add time
                    </a>
                  </button>
                )
            }
          </div>
        )}
      />
    </div>
  )
}
const Day = ({ day, url = '#' }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 ">
        <div className="relative h-4 w-4 ">
          <Image
            src="/Images/ProfilePhoto/blue-tick.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <span className="capitalize">{day}</span>
      </div>
      <div className="flex items-center gap-2">
        <select
          name=""
          id=""
          className="w-36 rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value=""> 9:00</option>
          <option value="">17:00</option>
          <option value="">15:00</option>
        </select>
        <span>To</span>
        <select
          name=""
          id=""
          className="w-36 rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value="">17:00</option>
          <option value=""> 9:00</option>
          <option value="">15:00</option>
        </select>
        <Link href={url}>
          <a className="relative h-4 w-4">
            <Image
              src="/Images/TutorsDashboard/plus.svg"
              objectFit="cover"
              layout="fill"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
const CompletedAndBackBtn = (props) => {
  return (
    <NextAndBackBtn
      is_final={true}
      nextButtonType="submit"
      onNextClick={() => props.handleSubmit()}
      onBackClick={() => Router.push('video')}
    />
  )
}
