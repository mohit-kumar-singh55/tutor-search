import React from 'react'
import Link from 'next/link'
function NextAndBackBtn({ onNextClick, onBackClick, nextButtonType, is_final }) {
  return (
    <>
      <div className="flex flex-col gap-4  md:flex-row">
        <button type={nextButtonType ? nextButtonType : 'button'}>
          <a
            onClick={() => onNextClick()}
            className="tutor-dashboard-btn   md:flex-line md:order-2"
          >
            {
              is_final ? "Publish" : "Next"
            }
          </a>
        </button>
        <button>
          <a
            onClick={() => onBackClick()}
            className="tutor-dashboard-back-btn md:flex-line  "
          >
            back
          </a>
        </button>
      </div>
    </>
  )
}

export default NextAndBackBtn
