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
  
  const [ errors, setErrors ] = useState({})

  const signup = useAuthStore(state => state.signup)
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create Account";
  }, []);
  
  const validateField = useCallback((name, value) => {
    switch (name){
      case 'fullname':
        return !value.trim() ? 'Full name is required.' : null;
      case 'phone':
        return !/^\d{10}$/.test(value.trim()) ? 'Phone must be 10 digits.' : null;
      case 'email':
        return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) 
          ? 'Please enter valid email address.' : null;
      case 'password':
        return value.length < 6 ? 'Password must be atleast 6 characters.' : null;
      case 'agency':
        return !value ? 'Field is required.' : null;
      default: return null
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }))

    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }))
  }, [validateField])

  function handleSubmit(e) {
    e.preventDefault();

    const errObj = {}
    Object.entries(formData).forEach(([name, value]) => {
      const errMsg = validateField(name, value);
      if(errMsg) errObj[name] = errMsg;
    })

    if(Object.keys(errObj).length > 0){
      setErrors(errObj)
      return;
    }

    const res = signup(formData)
    if(!res.success){
      toast.error(res.message);
    } else {
      navigate('/profile', { replace: true })
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
                  <InputField key={data.name} {...data} handleChange={handleChange} value={formData[data.name]} error={errors[data.name]} />
                ))
              }

              <div>
                <p className={`${errors.agency ? 'text-[#dd4a3d]' : ''} text-[13px] text-[#1D2226] mb-2.5`}>Are you an Agency?<span className='text-[#DD4A3D]'>*</span></p>
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