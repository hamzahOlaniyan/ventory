import * as React from "react";

export const Badge = ({ info }: { info: React.ReactNode }) => {
  return (
    <div className='bg-sky-500 text-nowrap text-xxs text-black rounded-md font-semibold p-1'>{info}</div>
  )
}