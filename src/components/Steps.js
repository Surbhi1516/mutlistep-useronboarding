import React, { useEffect, useRef, useState } from 'react'

const Steps = ({ steps, currentStep }) => {

  const [newStep, setNewStep] = useState([])
  const stepRef = useRef()

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        }
        count++
      }
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        }
        count++
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        }
        count++
      }
    }
    return newSteps;
  }

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign({}, {
        description: step,
        completed: false,
        highlighted: index === 0 ? true : false,
        selected: index === 0 ? true : false,
      }))
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  const displaySteps = newStep.map((step, index) => {
    return (
      <div key={index} className={index !== newStep.length - 1 ? 'w-full flex items-center' : 'flex items-center'}>
        <div className={` text-slate-800 rounded-full transition duration-500 ease-in-out border-2 border-gray-100 h-8 w-8 flex items-center justify-center py-3 ${step.selected ? 'bg-[#664DE5] text-white border border-[#664DE5]' : ''}`}>
          {step.completed ? (<span className='text-white '>{index + 1}</span>) : (index + 1)}
        </div>

        <div className={`flex-auto border-t transition duration-500 ease-in-out border-gray-100  ${step.completed ? 'border-[#664DE5]' : ''}`}>
          {/* display line */}
        </div>
      </div>
    )
  })

  return (
    <div className=' mx-4 p-4 flex bg-transparent  justify-between items-center'>
      {displaySteps}

    </div>

  )
}

export default Steps