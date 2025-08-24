import React from "react"

function InputField({
  label,
  handleChange,
  type,
  name,
  required = true,
  placeholder,
  value
}) {
  return (
    <label className='relative' htmlFor={name}>
      <span className='absolute-label'>
        {label}
        {
          required && <span className='text-[#DD4A3D]'>*</span>
        }
      </span>
      <input onChange={handleChange} value={value} type={type} name={name} id={name} placeholder={placeholder} />
    </label>
  )
}

export default React.memo(InputField)