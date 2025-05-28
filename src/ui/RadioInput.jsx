import React from 'react'

function RadioInput({label,name,id,value,onChange ,checked}) {
  return (
    <div className="flex items-center gap-x-2 to-secondary-600">
    <input type="radio" name={name} id={id} value={value} onChange={onChange} checked={checked} />
    <label htmlFor={id}>{label}</label>
  </div>
  )
}

export default RadioInput