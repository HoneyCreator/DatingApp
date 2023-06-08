import React from 'react'
import { Link } from 'react-router-dom'

const Newmaxico = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="bg-white items-center rounded p-5 my-6 rounded-[50px]">
    <div className="flex flex-col">
      <p className="text-center text-[30px] font-bold py-4">
        Background Verification
      </p>
      <p className="text-center text-[35px] font-bold">
        2021 Assault <br />
        New Maxico
      </p>
      <div className="mt-6 mx-auto">
        <Link to="/Idverified" className="bg-[#0247FF] min-w-[280px] flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2 justify-center" type="button">
          <span className="pr-3"><img src="images/validatedB 1.svg" alt /></span>Accept
        </Link>
      </div>
      <p className="text-center text-[20px] font-bold pt-2">Or</p>
      <div className="mt-2 mx-auto">
        <Link to="/Background" className="bg-[#0247FF] min-w-[280px] flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2 justify-center" type="button">
          <span className="pr-3"><img src="images/documentB 1.svg" alt /></span>
          Explanation
        </Link>
      </div>
      <div className="mt-[160px] mx-auto">
        <button className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2 justify-center" type="button">
          Submit
        </button>
      </div>
    </div>
  </div>
  <div className="w-[90%] mx-auto pt-5 pb-4">
    <img src="images/Group.svg" alt />
  </div>
</div>

    </div>
  )
}

export default Newmaxico
