

function LoginPage() {
  return (
    <div className='grow px-5 py-10'>
      <div>
        <div className='mb-[33px] flex flex-col gap-3.5'>
          <h1 className='font-rubik font-medium text-[#1D2226] text-[28px] leading-[36px] max-w-[188px]'>Signin to your PopX account</h1>
          <p className='font-rubik text-[#1D2226]/60 font-normal text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <form className='flex flex-col gap-[23px]'>
          <label htmlFor='email'>
            <span>Email Address</span>
            <input type='email' id='email' name='email' placeholder='Enter email address' />
          </label>
          <label htmlFor='password'>
            <span>Password</span>
            <input type='password' id='password' name='password' placeholder='Enter password' />
          </label>
        </form>
        <button className='mt-3.5 bg-[#CBCBCB] font-medium text-white'>Login</button>        
      </div>
    </div>
  )
}

export default LoginPage