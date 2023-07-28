import React, { useEffect } from 'react'

export const Step2 = ({canRender, isFilled}) => {
  const [value, setValue] = React.useState("")

  useEffect(() => {
    if(value !== ''){
      isFilled('step2', true)
    }else{
      isFilled('step2', false)
    }
  },[value])

  if (!canRender) {
    return null
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <label htmlFor='step2'>Step 2</label>
      <input id='step2' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}
