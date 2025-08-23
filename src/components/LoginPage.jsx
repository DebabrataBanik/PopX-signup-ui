import { useState } from "react"
import { useNavigate } from "react-router"

function LoginPage() {

  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({ email: '', password: ''})

  const isValid = formData.email.trim() && formData.password.trim();
 
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
    <div className='grow px-5 py-10'>
      <div>
        <div className='mb-[33px] flex flex-col gap-3.5'>
          <h1 className='font-rubik font-medium text-[#1D2226] text-[28px] leading-[36px] max-w-[188px]'>Signin to your PopX account</h1>
          <p className='font-rubik text-[#1D2226]/60 font-normal text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <form className='flex flex-col gap-[23px]' onSubmit={handleSubmit}>
          <label htmlFor='email' className="relative">
            <span className="absolute-label">Email Address</span>
            <input type='text' id='email' name='email' placeholder='Enter email address' onChange={handleChange} />
          </label>
          <label htmlFor='password' className="relative">
            <span className="absolute-label">Password</span>
            <input type='password' id='password' name='password' placeholder='Enter password' onChange={handleChange} />
          </label>
          <button 
            disabled={!isValid} 
            className={`-mt-[9px] font-medium ${isValid ? "bg-[#6C25FF]" : "bg-[#CBCBCB] cursor-not-allowed"} text-white`}
          >
            Login
          </button>        
        </form>


      </div>
    </div>
  )
}

export default LoginPage