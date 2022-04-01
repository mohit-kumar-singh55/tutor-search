import Link from 'next/link'
import { useRouter } from 'next/router'

function SideBar() {
    const router = useRouter();
    return (
        <div className="md:mt-9 md:p-7">
            <nav>
                <ul className="flex flex-row overflow-x-scroll text-[14px] md:flex-col ">
                    <li className={` mr-[36px] md:text-xl text-center justify-center font-semibold md:pb-9  font-roboto w-32 ${router.pathname === "/tutorDashboard/myprofile/basicDetails" ? "text-pink" : "text-[#878787]"} `}>
                        <Link href="/tutorDashboard/myprofile/basicDetails"><a>Basic Details</a></Link>
                    </li>
                    <li className={`mr-[36px] md:text-xl text-center justify-center font-semibold md:pb-9 ${router.pathname === "/tutorDashboard/myprofile/timeAvailability" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
                        <Link href="/tutorDashboard/myprofile/timeAvailability"><a>Time Availability</a></Link>
                    </li>

                    <li className={`mr-[36px] md:text-xl text-center justify-center font-semibold md:pb-9 ${router.pathname === "/tutorDashboard/myprofile/photo" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
                        <Link href="/tutorDashboard/myprofile/photo"><a>Photo</a></Link>
                    </li>
                    <li className={`mr-[36px] md:text-xl text-center justify-center font-semibold md:pb-9 ${router.pathname === "/tutorDashboard/myprofile/video" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
                        <Link href="/tutorDashboard/myprofile/video"><a>Video</a></Link>
                    </li>
                    <li className={`mr-[36px] md:text-xl text-center justify-center font-semibold md:pb-9 ${router.pathname === "/tutorDashboard/myprofile/qualifications" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
                        <Link href="/tutorDashboard/myprofile/qualifications"><a>Qualifications</a></Link>
                    </li>
                    <li className={`mr-[36px] md:text-xl text-center justify-center font-semibold md:pb-9 ${router.pathname === "/tutorDashboard/myprofile/settings" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`} >
                        <Link href="/tutorDashboard/myprofile/settings"><a>Profile</a></Link>
                    </li>

                </ul>
            </nav>

        </div>
    )
}

export default SideBar

