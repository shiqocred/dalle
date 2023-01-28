import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSupriseMe, handleSupriseMe }) => {
  return (
    <div>
      <div className="flex items-start flex-col gap-2 mb-2">
        <div className='flex gap-2'>
          <label htmlFor={name} className="block text-sm font-medium text-gray-900">
            {labelName}
          </label>
          {
            isSupriseMe && (
              <button type='button' onClick={handleSupriseMe} className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black">
                Supprise me
              </button>
            )
          }
        </div>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' />
      </div>
    </div>
  )
}

export default FormField