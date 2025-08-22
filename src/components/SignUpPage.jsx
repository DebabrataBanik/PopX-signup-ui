
function SignUpPage() {
  return (
    <div className='flex flex-col grow justify-between px-5 py-10'>
      <div>
        <h1 className='font-rubik font-medium text-[#1D2226] text-[28px] leading-[36px] max-w-[188px]'>Create your PopX account</h1>
        <form className='flex flex-col gap-[29px] mt-[31px]'>
          <label htmlFor='fullname'>
            <span>Full Name<span className='text-[#DD4A3D]'>*</span></span>
            <input type='text' name='fullname' id='fullname' placeholder='Enter full name' />
          </label>       
          <label htmlFor='phone'>
            <span>Phone Number<span className='text-[#DD4A3D]'>*</span></span>
            <input type='number' name='phone' id='phone' placeholder='Enter phone number' />
          </label>  
          <label htmlFor='email'>
            <span>Email Address<span className='text-[#DD4A3D]'>*</span></span>
            <input type='email' name='email' id='email' placeholder='Enter email address' />
          </label>  
          <label htmlFor='password'>
            <span>Password<span className='text-[#DD4A3D]'>*</span></span>
            <input type='password' name='password' id='password' placeholder='Enter password' />
          </label>  
          <label htmlFor='company'>
            <span>Company name<span className='text-[#DD4A3D]'>*</span></span>
            <input type='text' name='company' id='company' placeholder='Enter company name' />
          </label>   

          <div>
            <p className='text-[13px] text-[#1D2226] mb-2.5'>Are you an Agency?</p>
            <div className='flex items-center gap-[23px]'>
              <div className='flex items-center gap-3'>
                <input className='appearance-none rounded-full border border-[#919191]' type="radio" id="yes" name="agency" value="yes" />
                <label htmlFor="yes" className='text-sm text-[#1D2226]'>Yes</label>
              </div>

              <div className='flex items-center gap-3'>
                <input className='appearance-none rounded-full border border-[#919191]' type="radio" id="no" name="agency" value="no" />
                <label htmlFor="no" className='text-sm text-[#1D2226]'>No</label>
              </div>
            </div>
          </div> 
        </form>
      </div>
      
      <button className='bg-[#6C25FF] text-white font-medium mt-auto'>Create Account</button>

    </div>
  )
}

export default SignUpPage