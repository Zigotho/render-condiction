import React, { useEffect } from 'react'

export const Step3 = ({canRender, isFilled}) => {
  const [value, setValue] = React.useState("")

  useEffect(() => {
    if(value !== ''){
      isFilled('step3', true)
    }else{
      isFilled('step3', false)
    }
  },[value])

  if (!canRender) {
    return null
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor='step3'>Step 3</label>
      <input id='step3' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}
