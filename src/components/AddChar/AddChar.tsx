import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addChar } from '../../store/reducers/wordsSlice'

const AddChar = () => {
  const dispatch = useDispatch()
  const [inputValue, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
    dispatch(addChar(value))
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
