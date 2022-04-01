import Image from 'next/image'
import SearchBox from './Searchbox'
import NavbarButton from '../../Utils/Buttons/NavbarButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex h-[72px] w-full items-center justify-between bg-white py-2 px-1 shadow-lg sm:px-24">
      <div className="mx-4 flex h-5 w-[26px] flex-col items-end justify-between sm:hidden">
        <span className="h-[3px] w-[26px] bg-black"></span>
        <span className="h-[3px] w-[20px] bg-black"></span>
        <span className="h-[3px] w-[26px] bg-black"></span>
      </div>
      <div className="hidden sm:flex">
        <Image src="/Images/Navbar/png/logo.png" height={60} width={227} />
      </div>
      <div className="flex sm:hidden">
        <Image src="/Images/Navbar/png/logo.png" height={40} width={151} />
      </div>
      <div className="flex items-center justify-between">
        <div className="hidden px-4 sm:block">
          <SearchBox />
        </div>
        <div className="mx-4 hidden h-5 w-[26px] flex-col items-end justify-between sm:flex">
          <span className="h-[3px] w-[26px] bg-black"></span>
          <span className="h-[3px] w-[20px] bg-black"></span>
          <span className="h-[3px] w-[26px] bg-black"></span>
        </div>
        <Link href={"/auth/login"}>
          <div className="hidden px-4 sm:block">
            <span className="text-xl font-bold">Log In</span>
          </div>
        </Link>
        <div className="px-1 sm:px-4">
          <NavbarButton type="button" label="Sign Up" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
