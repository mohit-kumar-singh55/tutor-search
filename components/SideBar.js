import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ActiveHomeIcon,
  ActiveProfileIcon,
  HomeIcon,
  MessageIcon,
  ProfileIcon,
  RevenueIcon,
  ReviewIcon,
  SessionIcon,
  
  SettingIcon,
} from '../icons'
function SideBar() {
  const router = useRouter()
  const links = [
    {
      name: 'Home',
      link: '/tutorDashboard/about',
      active: router.pathname === '/tutorDashboard/about',
      icons: <HomeIcon />,
      activeIcons: <ActiveHomeIcon />,
    },
    {
      name: 'My Profile',
      link: '/tutorDashboard/myprofile/basicDetails',
      active: router.pathname?.split('/').includes('myprofile'),
      icons: <ProfileIcon />,
      activeIcons: <ActiveProfileIcon />,
    },
    {
      name: 'My Reviews',
      link: '/tutorDashboard/myreviews',
      active: router.pathname === '/tutorDashboard/myreviews',
      icons: <ReviewIcon />,
      activeIcons: <ReviewIcon />,
    },
    {
      name: 'Messages',
      link: '/tutorDashboard/messages',
      active: router.pathname === '/tutorDashboard/messages',
      icons: <MessageIcon />,
      activeIcons: <ActiveProfileIcon />,
    },
    {
      name: 'My Sessions',
      link: '/tutorDashboard/sessions',
      active: router.pathname === '/tutorDashboard/sessions',
      icons: <SessionIcon />,
      activeIcons: <ActiveProfileIcon />,
    },
    {
      name: 'My Revenue',
      link: '/tutorDashboard/revenue',
      active: router.pathname === '/tutorDashboard/revenue',
      icons: <RevenueIcon />,
      activeIcons: <ActiveProfileIcon />,
    },
    {
      name: 'Settings',
      link: '/tutorDashboard/settings',
      active: router.pathname === '/tutorDashboard/settings',
      icons: <SettingIcon />,
      activeIcons: <ActiveProfileIcon />,
    },
  ]
  return (
    <div className=" xl:w-96 lg:w-[350px] hidden rounded-r-lg bg-white lg:block px-2 ">
      <span className="block bg-gradient-to-r from-[#feae78] to-[#f94161] bg-clip-text pb-12 pt-2 text-2xl font-bold tracking-widest text-transparent">
        Dashboard
      </span>
      <SideBarLinks links={links} />
    </div>
  )
}

export default SideBar

export function SideBarLinks({ links, hideIcon = false }) {
  return (
    <nav className='w-full'>
      <ul className=''>
        {links.map((item, i) => (
          <li
            className={`align-center mb-5 block justify-center text-left font-roboto text-lg  font-bold ${
              item.active
                ? 'rounded-2xl bg-pink px-4 py-3 2xl:px-9 xl:px-5'
                : 'px-4 py-3 2xl:px-9 xl:px-5'
            } font-roboto`}
          >
            <Link href={item.link}>
              <a className={`flex ${item.active ? 'text-white' : null}`}>
                {hideIcon ? null : item.active ? item.activeIcons : item.icons}
                <span className="pl-3">{item.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
