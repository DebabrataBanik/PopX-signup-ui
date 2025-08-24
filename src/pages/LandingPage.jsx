import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useEffect } from "react";

function LandingPage() {

  useEffect(() => {
    document.title = "PopX Landing Page";
  }, []);

  return (
      <>
        <Helmet>
          <title>PopX Landing Page</title>
          <meta name="description" content="PopX Landing Page" />
        </Helmet>
        <div className='mt-auto px-5 py-10'>
          <div className='mb-[29px] flex flex-col gap-2.5'>
            <h1 className='font-rubik font-medium text-[#1D2226] text-[28px]'>Welcome to PopX</h1>
            <p className='font-rubik text-[#1D2226]/60 font-normal text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <div className='flex flex-col gap-2.5 items-center'>
            <Link to='/signup'>
              <button className='text-white bg-[#6C25FF] font-medium'>Create Account</button>
            </Link>
            <Link to='/login'>
              <button className='text-[#1D2226] bg-[#6C25FF4B] font-medium'>Already Registered? Login</button>
            </Link>
          </div>
        </div>
      </>
      
      
  )
}

export default LandingPage