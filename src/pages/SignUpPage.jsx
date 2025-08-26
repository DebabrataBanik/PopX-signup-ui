import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { inputData } from "../util/InputData";
import InputField from "../components/InputField";
import useAuthStore from "../store/authStore";
import { toast, ToastContainer } from "react-toastify";

function SignUpPage() {

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  })
  
  const signup = useAuthStore(state => state.signup)
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create Account";
  }, []);

  const isValid = Boolean(
    formData.fullname.trim() &&
    formData.phone.trim() &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.password.trim() &&
    formData.agency
  );
  
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    if (isValid) {
      const res = signup(formData);
      if(!res.success){
        toast.error(res.message)
      } else {
        navigate('/profile', { replace: true });
      }
    } else {
      toast.warn('Please fill in all required fields.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Create Account</title>
        <meta name="description" content="Create your PopX account." />
      </Helmet>
      <div className='flex flex-col grow justify-between px-5 pt-10 pb-[30px]'>
        <div className="flex flex-col grow">
          <h1 className='font-rubik font-medium text-[#1D2226] text-[28px] leading-[36px] max-w-[188px]'>Create your PopX account</h1>
          <form onSubmit={handleSubmit} className='flex flex-col justify-between grow'>

            <div className="flex flex-col gap-[29px] mt-[31px]">

              {
                inputData.map((data) => (
                  <InputField key={data.name} {...data} handleChange={handleChange} value={formData[data.name]} />
                ))
              }

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
            <button className={`bg-[#6C25FF] btn cursor-pointer text-white font-medium mt-auto`}>Create Account</button>
          </form>
        </div>

      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>

  )
}

export default SignUpPage