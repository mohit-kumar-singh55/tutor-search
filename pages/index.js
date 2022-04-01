import Head from 'next/head'
// import dynamic from 'next/dynamic'
// const HeroSection = dynamic(() => import('../components/HomePage/HeroSection'))
// const HeroSection2 = dynamic(() =>
//   import('../components/HomePage/HeroSection2')
// )
// import HeroSection3 from '../components/HomePage/HeroSection3'
// import ChatNow from '../components/HomePage/ChatNow'
// import ExpertInstructor from '../components/HomePage/ExpertInstructor'
// import DiscountPage from '../components/HomePage/DiscountPage'
// import SkillsOffered from '../components/HomePage/SkillsOffered'
// import Steps from './../components/HomePage/Steps'
// import RegisterPage from './../components/HomePage/RegisterPage'
// import Footer from './../components/HomePage/Footer'
import TopTutors from './../components/HomePage/TopTutors'
// import CustomerReviewPage from './../components/HomePage/CustomerReviewPage'
const Home = () => {
  // common css
  const mainContainer =
    ' relative px-8 flex  my-auto w-full max-w-[calc(1440px-80px)] md:grid  grid-cols-2 flex-col items-center justify-between self-stretch overflow-hidden   h-full  '

  return (
    <>
      <Head>
        <title>Skilly tree</title>
      </Head>
      <div className="full-page-snap-main ">
        <TopTutors />
        <TopTutors />
        <TopTutors />
      </div>
    </>
  )
}

export default Home
