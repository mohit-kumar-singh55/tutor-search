import React from 'react'

export const BackgroundImage = (props) => { return (
  <div >
    <div className="text-lg capitalize ">
      Upload Your Certificates To Increase The Credibility Of Your Profile(Optional)
    </div><br/><br/>
    <div className="flex items-center gap-2">
      <input
        type="file"
        className="rounded-lg border-[1px] border-[#FC4D6D]  py-3 px-6 text-sm font-medium  capitalize"
        onChange={(e) => props.handleChange(e.target.files[0])}
        
      />
     
    <div className="text-xs">
      <div className="">JPG or PNG format</div>
      <div>Maximum size - 20MB.</div>
    </div>
    </div>
    {props.background_pic ? (
      <section className=" gap-2">
        <div className="h-[106px] w-[106px] bg-blue-300">
          <img
            src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${props.background_pic}`}
            alt="img"
          />
          
        </div>
        </section>
    ):null
}

    </div>
    
        )
    }
