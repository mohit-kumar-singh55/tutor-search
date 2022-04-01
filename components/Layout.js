import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const SideBar = dynamic(() => import('./SideBar'))
const RightSidebar = dynamic(() => import('./RightSidebar'))
const Navbar = dynamic(() => import('./Navbar'))
function Layout({ children }) {
  const { route } = useRouter()
  return (
    <div>
      <Navbar />
      <div className={`flex ${route.split('/')[1] === 'tutorDashboard' && 'bg-[#FFF2E3] flex-col-reverse md:flex-row'} `}>
        {route.split('/')[1] === 'tutorDashboard' && <SideBar />}
        <main className='flex-grow'>{children}</main>
        {route.split('/')[2] === 'myprofile' && <RightSidebar />}
      </div>
    </div>
  )
}

export default Layout

// import dynamic from 'next/dynamic'
// const Navbar = dynamic(() => import('./Navbar'))
// import { useRouter } from 'next/router'
// function Layout({ children }) {
//   const loc = useRouter()
//   return (
//     <>
//       <div>
//         {(loc.pathname === '/about' || loc.pathname === '/description') && (
//           <Navbar />
//         )}
//         {children}
//       </div>
//     </>
//   )
// }

// export default Layout
