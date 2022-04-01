import Image from 'next/image'
export default function BlueTickLine({ data }) {
  return (
    <>
      <div className="flex items-center gap-2  text-[#838383]">
        <div className="relative h-4 w-4 ">
          <Image
            src="/Images/ProfilePhoto/blue-tick.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="text-sm capitalize">{data}</div>
      </div>
    </>
  )
}
