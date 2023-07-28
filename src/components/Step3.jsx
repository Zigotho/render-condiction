import React from 'react'

export const Step3 = ({canRender}) => {
  const [value, setValue] = React.useState("")

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
