import { useState } from 'react'
import './App.css'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'


function App() {

  const [canRender, setCanRender] = useState({
    step1: {
      canRender: true,
      isFilled : false
    },
    step2: {
      canRender: false,
      isFilled : false
    },
    step3: {
      canRender: false,
      isFilled : false
    },
  })

  const setIsFilled = (step, isFilled) => {
    const newCanRender = {
      ...canRender,
      [step]: {
        ...canRender[step],
        isFilled: isFilled
      }
    }
    defineCanRender(newCanRender)
  }

  const defineCanRender = (newCanRender) => {
    const Keys = Object.keys(newCanRender)
    let newObject = {...newCanRender}
    Keys.forEach((key, index) => {
      if(index === 0){
        newObject[key] = {
          canRender: true,
          isFilled: newCanRender[key]?.isFilled
        }
      }else{
        const render = newObject[Keys[index - 1]]?.canRender === true &&
          newObject[Keys[index - 1]]?.isFilled === true
          newObject[key] = {
            canRender: render,
            isFilled: newObject[key]?.isFilled
          }

        }
      })
      setCanRender(newObject)
  }

  return (
    <>
      <Step1 isFilled={(step, isFilled) => setIsFilled(step, isFilled)}/>
      <Step2 isFilled={(step, isFilled) => setIsFilled(step, isFilled)} canRender={canRender.step2.canRender} />
      <Step3 isFilled={(step, isFilled) => setIsFilled(step, isFilled)} canRender={canRender.step3.canRender} />
    </>
  )
}

export default App
