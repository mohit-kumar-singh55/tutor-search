import { useEffect } from 'react'
import Router from 'next/router'
import Server from '../../utils/Server'
import { getUserProfile, ROLE_NAME } from '../../utils/constants'
import { getLocalStorage, setLocalStorage } from '../../utils/cookies'
import { getCookie } from 'cookies-next'
import Link from 'next/link'

const tutorDashboard = () => {
  useEffect(() => {
    if (true) {
      isAuth()
    }
  }, [])

  const isAuth = async () => {
    if (getCookie('token')) {
      const user = await Server.get(getUserProfile, { Authorization: `BEARER ${getCookie('token')}` })
      if (user.success && user.data.role_name === ROLE_NAME.TUTOR) {
        const login_response = user.data;
        setLocalStorage('user', {
          ...login_response,
          ...login_response.tutor_details,
          ...login_response.tutor_profile,
          tutor_details: undefined,
          tutor_profile: undefined,
        })
        if (!user.data.tutor_details.profile_update) {
          Router.push('/tutorDashboard/about')
        }
      } else {
        Router.push('/auth/login')
      }
    } else {
      Router.push('/auth/login')
    }
  }

  return (
    <>
      <div className="h-full w-full">
        <div className="fixed -z-10 h-full w-full">
          <Link href={'/tutorDashboard/about'}>
            <a
              className={`whitespace-nowrap  text-[18px]   font-[600]`}
            >
              Start
            </a>
          </Link>
          <br />
          <Link href={'/tutorProfile'}>
            <a
              className={`whitespace-nowrap  text-[18px]   font-[600]`}
            >
              View Profile
            </a>
          </Link>
          <br />
          <Link href={'/tutors'}>
            <a
              className={`whitespace-nowrap  text-[18px]   font-[600]`}
            >
              Tutors Search
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default tutorDashboard
