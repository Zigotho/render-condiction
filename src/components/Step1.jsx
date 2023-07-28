import React, { useEffect } from 'react'

export const Step1 = ({isFilled}) => {
  const [value, setValue] = React.useState('')

  useEffect(() => {
    if(value !== ''){
      isFilled('step1', true)
    }else{
      isFilled('step1', false)
    }
  },[value])
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <label htmlFor='step1'>Step 1</label>
      <input id='step1' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}
