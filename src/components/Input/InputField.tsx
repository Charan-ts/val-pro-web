import { useState } from 'react'
import './input-field.scss'

const InputField = (props: any) => {
  const [value, setValue] = useState('')

  const onValueChange = (e: any) => {
    console.log(e.target.value)
    if (e.target.value.length < 2) {
      setValue(e.target.value)
    }

    if (e.target.value.length > 1) {
      setTimeout(() => {
        props.setEnableMsg(true)
      }, 1000 * 5)
    }
  }

  return (
    <>
      <div className='input-block'>
        <input
          type='text'
          name='input-text'
          id='input-text'
          required
          value={value.toUpperCase()}
          onChange={onValueChange}
        />
        <span className='placeholder'>Name</span>
      </div>
    </>
  )
}

export default InputField
