import { Helmet } from "react-helmet-async"
import { useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom'
import ProfileImage from '../assets/images/Ellipse 114.png';
import InsertImageIcon from '../assets/icons/Group 1585.png';
import useAuthStore from "../store/authStore";

function ProfilePage() {

  const currentUser = useAuthStore(state => state.currentUser)
  const logout = useAuthStore(state => state.logout)

  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  useEffect(() => {
    document.title = "Your Profile";
  }, []);

  return (
    <>
      <Helmet>
        <title>Your Profile</title>
        <meta name="description" content="Profile Settings" />
      </Helmet>
      <div className="relative">
          <header className='w-full h-[68px] flex items-center justify-between px-[19px] pt-[27px] pb-[19px] bg-white shadow-header mb-[30px]'>
            <h2 className='text-[18px] leading-[21px] text-[#1D2226]'>Account Settings</h2>
            <button onClick={handleLogout} className="text-sm text-[#6C25FF] hover:bg-[#6C25FF] hover:text-white p-1.5 px-2 transition-all duration-300 rounded-md cursor-pointer">Logout</button>
          </header>
          <section className='pl-5 pr-[18px] flex flex-col gap-[30px] pb-5 border-0 border-b custom-dash'>
            <div className='flex gap-5'>
              <div className='w-[76px] h-[76px] relative'>
                <img src={ProfileImage} alt='Headshot of Mary Doe' />
                <img className='absolute-img cursor-pointer' src={InsertImageIcon} alt="Change profile picture" />
              </div>
              <div>
                {/* <h3 className='text-[#1D2226] font-medium text-[15px]'>Mary Doe</h3> */}
                <h3 className='text-[#1D2226] font-medium text-[15px]'>{currentUser?.fullname}</h3>

                {/* <p className='text-[#1D2226] text-sm'>Marry@Gmail.Com</p> */}
                <p className='text-[#1D2226] text-sm'>{currentUser?.email}</p>

              </div>
            </div>
            <div>
              <p className='text-sm text-[#1D2226]'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </div>
          </section>
          <div className="absolute custom-dash bottom-9 left-0 w-full border-0 border-b"></div>
      </div>
    </>
    
  )
}

export default React.memo(ProfilePage)