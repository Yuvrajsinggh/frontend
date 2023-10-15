import React from 'react'
import { Switch, Typography } from "@material-tailwind/react";

const Security = () => {
  const handlechange = () => {
      console.log("Your Account is private")
  } 
  return (
    <div className='bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] h-[91vh] flex justify-center'>
      <Switch
      id="custom-switch-component"
      ripple={false}
      className="h-full w-full checked:bg-[#2ec946]"
      containerProps={{
        className: "w-11 h-6 -mt-5",
      }}
      label={
        <div>
          <Typography color="blue-gray" className="font-medium text-white">
            Private Account
          </Typography>
          <Typography variant="small" color="gray" className="font-normal text-white">
            By Checking this you ensure that all your posts will be shared to your followers only.
          </Typography>
        </div>
      }
      circleProps={{
        className: "before:hidden left-0.5 border-none",
      }}
      onClick={handlechange}
    />
    </div>
  )
}

export default Security
