import React from 'react'

const MyReview = () => {
    return (
        <div className='flex'>
            <div className='w-1/5 h-screen border-r-2'>
                <div className='border-b-2'>
                    <ul className='flex'>
                        <li>All</li>
                        <li>Unread</li>
                    </ul>
                </div>
                <div>

                    <ul className=''>
                        <li>Claire.U</li>
                        <li>Claire.U</li>
                        <li>Claire.U</li>
                        <li>Claire.U</li>
                    </ul>
                </div>
            </div>

            <div className=''>
                <div className='border-b-2'>
                    Claire.U
                </div>
                <div>
                    bottom
                </div>
            </div>
        </div>
    )
}

export default MyReview