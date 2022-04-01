import Image from 'next/image'
import React from 'react'
import messageIcon from '../public/Images/Vector.png'

export const MessageIcon = (props) => {
  return(

    <Image src={messageIcon} alt="messageIcon" {...props} className="h-5 w-5" />
  )
}
