import Link from 'next/link'
import GradientBtn from './HomePage/GradientBtn'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useClickOutside } from 'react-click-outside-hook'
import { RiCloseCircleLine } from 'react-icons/ri'
import { getLocalStorage, setLocalStorage, signout } from '../utils/cookies'
import { getCookie } from 'cookies-next'
import { ActiveHomeIcon, ActiveProfileIcon, HomeIcon, LoginIcon, MessageIcon, ProfileIcon, RevenueIcon, SessionIcon, SettingIcon } from "../icons";
import { useRouter } from 'next/router'
import { SideBarLinks } from './SideBar'

function Navbar() {
  const [user_data, set_user_data] = useState(null)
  let [menu, setMenu] = useState(false)
  let [search, setSearch] = useState(false)
  let [showSuggetions, setShowSuggetions] = useState(false)
  let [showSearchOnLg, setShowSearchOnLg] = useState(false)
  const { route } = useRouter()
  const router = useRouter();
  const sideLinks = [
      { name: 'Home', link: '/tutorDashboard/about', active: router.pathname === '/tutorDashboard/about', icons: <HomeIcon />, activeIcons: <ActiveHomeIcon /> },
      { name: 'My Profile', link: '/tutorDashboard/myprofile/basicDetails', active: router.pathname?.split('/').includes('myprofile'), icons: <ProfileIcon />, activeIcons: <ActiveProfileIcon /> },
      { name: 'My Reviews', link: '/tutorDashboard/myreviews', active: router.pathname === '/tutorDashboard/myreviews', icons: <ProfileIcon />, activeIcons: <ActiveProfileIcon /> },
      { name: 'Messages', link: '/tutorDashboard/messages', active: router.pathname === '/tutorDashboard/messages', icons: <MessageIcon />, activeIcons: <ActiveProfileIcon /> },
      { name: 'My Sessions', link: '/tutorDashboard/sessions', active: router.pathname === '/tutorDashboard/sessions', icons: <SessionIcon />, activeIcons: <ActiveProfileIcon /> },
      { name: 'My Revenue', link: '/tutorDashboard/revenue', active: router.pathname === '/tutorDashboard/revenue', icons: <RevenueIcon />, activeIcons: <ActiveProfileIcon /> },
      { name: 'Settings', link: '/tutorDashboard/settings', active: router.pathname === '/tutorDashboard/settings', icons: <SettingIcon />, activeIcons: <ActiveProfileIcon /> },
  ]
  const [onDashboard, setOnDashboard] = useState(route.split('/')[1] === 'tutorDashboard')
  useEffect(() => {
    setOnDashboard(route.split('/')[1] === 'tutorDashboard')
  }, [route])

  function toggleMenu() {
    setMenu(!menu)
  }

  useEffect(() => {
    const user = getLocalStorage('user');
    set_user_data(user)
  }, []);

  // console.log(search, menu)
  const pageLinksHoverBorder = `relative hover:text-black  md:after:h-1 md:after:mt-[-1rem] md:after:bg-[#FC4D6D] after:rounded-full hover:after:absolute after:left-0 md:after:top-11  ease-in-out after:duration-800 after:w-[2rem] `
  const links = [
    { icon: 'searchIcon' },
    { name: 'home', link: '/', css: 'mt-6', active: true },
    {
      name: 'search',
      link: '/',
      img: '',
      search: true,
    },
    { name: 'find tutors', link: '/', css: '' },
    { name: 'how it works?', link: '/', css: '' },
    // { name: 'login', link: '/auth/login', css: 'md:hidden' },
    // { name: 'reviews', link: '/', css: '!pb-6 ' },
  ]

  const logout = () => {
    signout(() => {
      window.location = '/tutorDashboard'
    });

  }
  return (
    <>
      {/*    fixed*/}
      <div className=" sticky-nav relative  z-30  flex h-[79px]  justify-center    bg-white  shadow-md    ">
        <div className=" relative mx-auto  flex  w-[90rem] items-center justify-between   py-4 px-6  md:px-12   lg:px-20    ">
          {/* <div className=""> */}
          {
            !onDashboard &&
            <Menu
              height={19}
              width={30}
              menuCss={'lg:hidden mr-2'}
              onClick={toggleMenu}
            />
          }
          {/* </div> */}
          <MenuLink onDashboard={onDashboard} />
          <div className=" flex gap-12      bg-white md:justify-between">
            {/* <div className=" "> */}
            <Logo height="47" width="179" />
            {/* </div> */}
            {/* <Logo height="34" width="134" /> */}
            <div
              className={`mx-auto hidden  items-center    justify-center gap-2  ${showSearchOnLg ? 'lg:flex ' : 'hidden'
                }`}
            >
              <NavSearchBox />
              {/* <SearchBox searchCss={'bg-red-400 '} /> */}
              <span
                className=" rounded-full"
                onClick={() => setShowSearchOnLg(false)}
              >
                <Menu />
              </span>
            </div>

          </div>
          <LargeScreenMenuLinks />
          <div className=" flex  items-center gap-12">
            {
              getCookie("token")
                ?
                <>
                  {
                    !onDashboard &&
                    <>
                      <a
                        onClick={(e) => { e.preventDefault(); logout() }}
                        className={`whitespace-nowrap  text-[18px]   font-[600] `}
                      >
                        Logout
                      </a>
                      <GradientBtn
                        urlLink={'/tutorDashboard'}
                        btnName="Dashboard"
                        btnCss="text-sm   md:text-lg md:px-6  !mx-0 !px-6 !py-3  "
                      />
                    </>
                  }
                </>
                :
                <>
                  <Login />
                  <GradientBtn
                    urlLink={'/auth/signup'}
                    btnName="Join as Tutor"
                    btnCss="text-sm   md:text-lg md:px-6  !mx-0 !px-6 !py-2 hidden lg:flex "
                  />
                </>
            }
          </div>
          {
            onDashboard &&
            <Menu
              height={19}
              width={30}
              menuCss={'lg:hidden mr-2'}
              onClick={toggleMenu}
            />
          }
        </div>
        <MainSearch />
      </div>
    </>
  )

  function LargeScreenMenuLinks() {
    return (
      <div className=" hidden items-center  gap-6   font-semibold capitalize text-gray-400 lg:flex">
        {links.map((links, index) => (
          <div
            key={index}
            className={`${!showSearchOnLg ? 'flex' : 'hidden'}   items-center `}
          >
            <div
              onClick={() => setShowSearchOnLg(true)}
              className={
                links.icon == 'searchIcon'
                  ? 'flex cursor-pointer rounded-full  p-2 hover:bg-gray-200 '
                  : 'hidden'
              }
            >
              <Image
                placeholder
                src="/Images/Navbar/svg/search.svg"
                height={18}
                width={18}
              />
            </div>
            <Link href={'/'}>
              <a
                key={index}
                className={` ${links.name == 'home' ? 'text-black after:absolute' : ''
                  }   font-monts text-base font-semibold  ${links.name ? pageLinksHoverBorder : ''
                  }  ${links.name === 'search' ? 'hidden' : ''}`}
              >
                {links.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    )
  }
  function Menu({ menuCss, height = 20, width = 26, onClick }) {
    return (
      <div
        onClick={onClick}
        className={` hover:bg-gray-200  ${menu ? 'bg-gray-200' : ''
          } relative flex items-center rounded-2xl ${menuCss}  cursor-pointer   p-2`}
      >
        <Image
          src="/Images/Navbar/svg/menu.svg"
          height={height}
          width={width}
        />
        {/* <Image   src={'/Images/menu.svg'} height={height} width={width} /> */}
      </div>
    )
  }

  function MainSearch() {
    const [suggetions, hasClickedOutsideSearch] = useClickOutside()
    if (hasClickedOutsideSearch === true) setShowSuggetions(false)

    return (
      <div
        className={`  ${search ? 'flex' : 'hidden'
          }     search-transition absolute   inset-x-0 top-[8rem] !z-50  mx-6 flex justify-center md:mx-auto md:hidden   `}
      >
        <div
          ref={suggetions}
          className=" flex   flex-col items-center  rounded-xl bg-white shadow-md "
        // onClick={}
        >
          <div className="   mx-4 mt-4  flex  h-10 items-center justify-center gap-3  rounded-full pb-4">
            <SearchBox
              searchCss={' '}
              reference={suggetions}
              onClick={() => setShowSuggetions(true)}
            />
          </div>
          <div
            className={`${showSuggetions && !hasClickedOutsideSearch ? 'flex' : 'hidden'
              }     z-50 flex   w-[calc(100%-10%)] flex-col items-center  gap-4  pb-4 `}
          >
            {Array.from(Array(5), (_, index) => index + 1).map((index, arr) => (
              <div key={index} className=" flex flex-col items-center ">
                <div className="ga flex items-center gap-2  py-2 text-xs">
                  <Link href={'/'}>
                    <a className=" !z-50 flex !cursor-pointer items-center gap-2 ">
                      <Image
                        src="/Images/Navbar/svg/suggetionProflieImg.svg"
                        height={24}
                        width={24}
                      />
                      <span className="capitalize text-gray-400">
                        Gardening Course By Rosea Bell
                      </span>
                    </a>
                  </Link>
                </div>
                <div
                  className={`mx-8 h-[2px] w-full bg-gray-200  ${arr.length === arr.length ? 'hidden' : ''
                    }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="max-w-42 absolute  -top-9  ml-2  cursor-pointer rounded-full   bg-white   p-1 text-2xl font-semibold text-gray-300
          "
          onClick={() => setSearch(false)}
        >
          <RiCloseCircleLine />
          {/* Hide */}
        </div>
      </div>
    )
  }

  function MenuLink({ css, onDashboard }) {
    const [ref, hasClickedOutside] = useClickOutside()
    if (hasClickedOutside === true) setMenu(false)
    return (
      <div
        ref={ref}
        className={`  ${css} menu-transition z-50    shadow-md   ${menu && !hasClickedOutside ? 'flex' : 'hidden'
          } items-center-center    absolute top-[5rem] ${onDashboard ? 'right-0' : 'left-0'} w-52 flex-col  gap-4 rounded-br-2xl bg-white font-monts text-sm   font-semibold capitalize  text-gray-400 `}
      >
      <SideBarLinks links={sideLinks} hideIcon={true} />
        <NavLinks onDashboard={onDashboard} />
      </div>
    )
  }

  function NavLinks({onDashboard}) {
    return (
      <>
        {links.map((links, index, arr) => (
          <div key={index} className=" -mt-4">
            <Link href={'/'}>
              <a
                className={`${links.icon === 'searchIcon' ? 'hidden' : ''
                  }   ml-8  mb-4 flex pt-4 transition delay-100   ease-in-out hover:text-gray-500  ${links.css ? links.css : ''
                  } ${links.css ? links.css : ''}`}
                onClick={
                  links.name === 'search'
                    ? () => {
                      setSearch(true)
                      setMenu(false)
                    }
                    : ''
                }
              >
                <div
                  className={`mr-2 mt-[2px] ${links.search ? 'block' : 'hidden'
                    }`}
                >
                  <Image
                    priority
                    src="/Images/Navbar/svg/search.svg"
                    height={18}
                    width={18}
                  />
                </div>
                <span
                  className={`${links.name === 'home'
                    ? 'hover:text-pink-500 cursor-pointer text-[#FC4D6D]'
                    : ''
                    }`}
                >
                  {links.name}
                </span>
              </a>
            </Link>
            <div
              className={`mx-6 h-[1px] w-40 rounded-full bg-gray-200 md:${links.name == 'login' ? 'hidden' : 'md:flex'
                } ${links.icon == 'searchIcon' ? 'hidden ' : ''} `}
            />
          </div>
        ))}
        {
          getCookie("token")
            ?
            onDashboard ?
            null
            :
            <GradientBtn
              urlLink={'/tutorDashboard'}
              btnName="Dashboard"
              btnCss="text-sm   md:text-lg md:px-6  !mx-0 !px-6 !py-3  "
            />
            :
            <GradientBtn
              urlLink={'/auth/signup'}
              btnName="Join as Tutor"
              btnCss="text-sm md:text-2xl md:px-6  !mx-5 mb-4 !px-4 !py-2  "
            />
        }
      </>
    )
  }

  function Login({ loginCss }) {
    return (
      <>
        <Link href={'/auth/login'}>
          <a
            className={`whitespace-nowrap  text-[18px] flex items-center justify-center  font-[600] ${loginCss}`}
          >
            <LoginIcon className="mr-1" />
            Log In
          </a>
        </Link>
      </>
    )
  }
}

export default Navbar

function NavSearchBox({ searchCss, click, reference }) {
  return (
    <>
      <div
        className={`  flex   h-[34px] w-[460px]  items-center rounded-xl  py-[2px] px-[26px] font-monts ring-1  ring-gray-200  ${searchCss} border-2 `}
      >
        <Link href={'/'}>
          <a className="mr-4 flex items-center rounded-full  ">
            <Image src="/Images/Navbar/svg/search.svg" height={18} width={18} />
          </a>
        </Link>
        <input
          ref={reference}
          onClick={click}
          className=" h- !z-50   w-full font-bold capitalize  tracking-[0.16em] placeholder-[#B4B4B4] outline-none placeholder:text-[12px] placeholder:leading-[15px] placeholder:tracking-[0.16em] "
          type="text"
          placeholder="SEARCH A SKILL"
        />
      </div>
    </>
  )
}

export function SearchBox({ searchCss, click, reference }) {
  return (
    <div
      className={`  flex   h-[33px] max-w-[325px]  items-center rounded-full  py-[8px] px-[26px] font-monts ring-1  ring-gray-200  ${searchCss}`}
    >
      <input
        ref={reference}
        onClick={click}
        className=" !z-50  w-full font-bold capitalize  tracking-[0.16em] placeholder-[#B4B4B4] outline-none placeholder:text-[12px] placeholder:leading-[15px] placeholder:tracking-[0.16em] "
        type="text"
        placeholder="SEARCH A SKILL"
      />
      <Link href={'/'}>
        <a className="ml-4 flex items-center rounded-full  ">
          <Image src="/Images/Navbar/svg/search.svg" height={18} width={18} />
        </a>
      </Link>
    </div>
  )
}

export function Logo({ logoCss, width = 240, height = 62 }) {
  return (
    <>
      <Link href={'/'}>
        <a className={`flex items-center    ${logoCss}`}>
          <Image
            // property
            src="/Images/Navbar/png/logo.png"
            width={width}
            height={height}
          />
        </a>
      </Link>
    </>
  )
}
