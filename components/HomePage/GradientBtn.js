import Link from 'next/link'
import Image from 'next/image'

function GradientBtn({ urlLink, btnName, leftArrow, rightArrow, btnCss }) {
  return (
    <>
      <Link href={urlLink}>
        <a
          className={` flex   items-center    justify-center !whitespace-nowrap   rounded-full bg-gradient-to-r  from-[#FC4D6D] to-[#FDA02F] font-monts  font-bold  capitalize  text-white  ${btnCss}
           
          ${
            leftArrow &&
            ' from-[#FDA02F]   to-[#FC4D6D] md:rounded-bl-none md:rounded-tr-none  md:rounded-tl-full md:rounded-br-full  '
          }   
         ${(leftArrow || rightArrow) && 'md:font-extrabold '}
          
          ${
            rightArrow &&
            'self-baseline from-[#FC4D6D]  to-[#FDA02F]  md:rounded-tl-none  md:rounded-br-none md:rounded-bl-full md:rounded-tr-full    '
          } 
        `}
        >
          <div className=" order-2">{btnName}</div>
          <div
            className={`  ${
              rightArrow ? ' order-2 ml-3  hidden md:flex' : 'hidden'
            }`}
          >
            <Image
              src={'/Images/GradientBtn/right-arrow.svg'}
              height={18}
              width={20}
            />
          </div>
          <div
            className={`${
              leftArrow ? 'order-1 mr-3 hidden  md:flex' : 'hidden'
            }`}
          >
            <Image
              src={'/Images/GradientBtn/left-arrow.svg'}
              height={24}
              width={26}
            />
          </div>
        </a>
      </Link>
    </>
  )
}

export default GradientBtn
