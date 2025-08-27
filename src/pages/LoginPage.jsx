import { useState , useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async";
import InputField from "../components/InputField";
import { inputData } from "../util/InputData";
import validateField from "../util/validateField";
import useAuthStore from "../store/authStore";
import { ToastContainer, toast } from "react-toastify";

function LoginPage() {

  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({ email: '', password: ''})
  const [ errors, setErrors ] = useState({})

  const login = useAuthStore(state => state.login)

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const isValid = Boolean(
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.password.trim()
  );
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev, 
      [name]: validateField(name, value)
    }))
  }

  function handleSubmit(e){
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

    const res = login(formData.email, formData.password);
    if(!res.success){
      toast.error(res.message);
    } else {
      navigate('/profile', { replace: true })
    }
  }

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Signin to your PopX account." />
      </Helmet>
      <div className='grow px-5 py-10'>
        <div>
          <div className='mb-[33px] flex flex-col gap-3.5'>
            <h1 className='font-rubik font-medium text-[#1D2226] text-[28px] leading-[36px] max-w-[188px]'>Signin to your PopX account</h1>
            <p className='font-rubik text-[#1D2226]/60 font-normal text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <form noValidate className='flex flex-col gap-[23px]' onSubmit={handleSubmit}>

            {
              inputData.map(data => {
                if(data.name == 'email' || data.name == 'password'){
                  return (
                    <InputField key={data.name} {...data} handleChange={handleChange} handleBlur={handleBlur} value={formData[data.name]} error={errors[data.name]}/>
                  )
                }
                return null;
              })
            }
            <button 
              disabled={!isValid} 
              className={`btn -mt-[9px] font-medium ${isValid ? "bg-[#6C25FF] cursor-pointer" : "bg-[#CBCBCB] cursor-not-allowed"} text-white`}
            >
              Login
            </button>
            <p className="text-sm">Don't have an account. 
              <Link to='/signup'>
                <span className="text-[#6C25FF]"> Create Now</span>
              </Link>
            </p>  
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

export default LoginPage