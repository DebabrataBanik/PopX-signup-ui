import { useState } from "react";
import { useNavigate } from "react-router";

function SignUpPage() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  })

  const isValid =
    formData.fullname.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.password.trim() &&
    formData.agency;


  function handleChange(e){
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    if(isValid) navigate('/profile');
  }

  return (
    <div className='flex flex-col grow justify-between px-5 pt-10 pb-[30px]'>
      <div className="flex flex-col grow">
        <h1 className='font-rubik font-medium text-[#1D2226] text-[28px] leading-[36px] max-w-[188px]'>Create your PopX account</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-between grow'>

          <div className="flex flex-col gap-[29px] mt-[31px]">
            <label className="relative" htmlFor='fullname'>
              <span className="absolute-label">Full Name<span className='text-[#DD4A3D]'>*</span></span>
              <input onChange={handleChange} type='text' name='fullname' id='fullname' placeholder='Enter full name' />
            </label>       
            <label className="relative" htmlFor='phone'>
              <span className="absolute-label">Phone Number<span className='text-[#DD4A3D]'>*</span></span>
              <input onChange={handleChange} type='text' name='phone' id='phone' placeholder='Enter phone number' />
            </label>  
            <label className="relative" htmlFor='email'>
              <span className="absolute-label">Email Address<span className='text-[#DD4A3D]'>*</span></span>
              <input onChange={handleChange} type='text' name='email' id='email' placeholder='Enter email address' />
            </label>  
            <label className="relative" htmlFor='password'>
              <span className="absolute-label">Password<span className='text-[#DD4A3D]'>*</span></span>
              <input onChange={handleChange} type='password' name='password' id='password' placeholder='Enter password' />
            </label>  
            <label className="relative" htmlFor='company'>
              <span className="absolute-label">Company name</span>
              <input onChange={handleChange} type='text' name='company' id='company' placeholder='Enter company name' />
            </label>   

            <div>
              <p className='text-[13px] text-[#1D2226] mb-2.5'>Are you an Agency?</p>
              <div className='flex items-center gap-[23px]'>
                <div className='flex items-center gap-3'>
                  <input className='appearance-none rounded-full border border-[#919191]' onChange={handleChange} type="radio" id="yes" name="agency" value="yes" />
                  <label htmlFor="yes" className='text-sm text-[#1D2226]'>Yes</label>
                </div>

                <div className='flex items-center gap-3'>
                  <input className='appearance-none rounded-full border border-[#919191]' onChange={handleChange} type="radio" id="no" name="agency" value="no" />
                  <label htmlFor="no" className='text-sm text-[#1D2226]'>No</label>
                </div>
              </div>
            </div>
          </div> 
          <button disabled={!isValid} aria-disabled={!isValid} className={`bg-[#6C25FF] ${!isValid ? 'cursor-not-allowed' : ''} text-white font-medium mt-auto`}>Create Account</button>
        </form>
      </div>
      

    </div>
  )
}

export default SignUpPage