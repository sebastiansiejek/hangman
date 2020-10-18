import React from 'react'
import { useState } from 'react'

const AddChar = () => {
  const [inputValue, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
    setTimeout(() => setValue(''), 100)
  }

  return (
    <input
      type="text"
      maxLength={1}
      onChange={(e) => handleChange(e)}
      value={inputValue}
    />
  )
}

export default AddChar
