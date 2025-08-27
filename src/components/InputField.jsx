import React from "react"

function InputField({
  label,
  handleChange,
  type,
  name,
  required = true,
  placeholder,
  value,
  error
}) {
  return (
    <label className='relative' htmlFor={name}>
      <span className={`absolute-label ${error ? 'text-[#DD4A3D]' : ''} `}>
        {label}
        {
          required && <span className='text-[#DD4A3D]'>*</span>
        }
      </span>
      <input
        className={`${error ? 'border-[#e70b897b]' : ''}`} 
        onChange={handleChange} value={value} type={type} name={name} id={name} placeholder={placeholder} />
        {error && <p className="text-[#dd4a3d] text-xs mt-1">{error}</p>}
    </label>
  )
}

export default React.memo(InputField)