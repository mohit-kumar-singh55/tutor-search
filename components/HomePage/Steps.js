import Image from 'next/image'
function Steps() {
  return (
    <div className="snap-fullPage h-full">
      <main className=" flex flex-col gap-6  ">
        <div className="      flex justify-center text-center text-2xl font-bold  text-[#5E5252]  lg:text-4xl   ">
          <div className=" mx-4 max-w-[450px] ">
            YOUR NEW SKILL IS JUST
            <span className="text-[#FC4D6D]"> 4 STEPS</span> AHEAD!!
          </div>
        </div>

        <div className=" ml-8 lg:hidden     ">
          <Image
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
            src="/Images/HomePage/step-mobile-view.png"
            width={297}
            height={502}
            alt=""
          />
        </div>

        <div className="hidden lg:flex     ">
          <Image
            src="/Images/HomePage/step-desktop-view.webp"
            width={934}
            height={449}
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
export default Steps
