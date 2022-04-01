import CourseCart from '../CourseCart'
import Link from 'next/link'

function TopTutors() {
  return (
    <div className="snap-fullPage h-full">
      <main className="flex h-full w-full max-w-[calc(1440px-250px)] items-center flex-wrap justify-center gap-8 md:justify-between   ">
        <div className="flex items-center justify-center lg:hidden">
          <Link href={'/tutors'}>
            <a className=" ">
              <CourseCart
                topRightTitle={'top tutors'}
                coverImg="/Images/CourseCart/girl-using-tablet.png"
                tutorName={'Radhakishan J.'}
                countryLogo={'/Images/CourseCart/united-kingdom.svg'}
                tutorImg="/Images/CourseCart/girl-looking-up.png"
              />
            </a>
          </Link>
        </div>

        {Array.from(Array(3), (_, index) => index + 1).map((index) => (
          <Link href={'/tutors'}>
            <a key={index} className=" hidden lg:flex">
              <CourseCart
                topRightTitle={'top tutors'}
                coverImg="/Images/CourseCart/girl-using-tablet.png"
                tutorName={'Radhakishan J.'}
                countryLogo={'/Images/CourseCart/united-kingdom.svg'}
                tutorImg={'/Images/CourseCart/girl-looking-up.png'}
              />
            </a>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default TopTutors
