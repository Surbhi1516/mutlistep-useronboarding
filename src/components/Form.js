import { useState } from 'react';
import { StepperContext } from '../contexts/StepperContext';
import Header from './Header';
import Steps from './Steps';
import PersonalInfo from '../pages/PersonalInfo';
import WorkspaceName from '../pages/WorkspaceName';
import Streamline from '../pages/Streamline';
import FinalPage from '../pages/FinalPage';
import Button from './Button';



function Form() {

  const [currentStep, setCurrentStep] = useState(1);
  // form input states yet to be managed
  // const [formData, setFormData] = useState({})


  const steps = ['personalInfo', 'workspaceName', 'streamline', 'Final']


  const displayPages = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <WorkspaceName />
      case 3:
        return <Streamline />
      case 4:
        return <FinalPage />
      default:
        return <PersonalInfo />
    }
  }

  const handleClick = () => {
    setCurrentStep(currentStep + 1)
    currentStep > 0 && currentStep <= steps.length && setCurrentStep(currentStep + 1)

  }

  return (
    <main className="  flex flex-col items-center justify-center">
      <Header />
      <div className='md:w-1/2  mx-auto flex flex-col justify-center items-center '>
        <div className='w-7/12 '>
          <Steps steps={steps} currentStep={currentStep} />
        </div>
        <div className='w-full '>
          <div>
            <StepperContext.Provider value={{}}>
              {displayPages(currentStep)}
            </StepperContext.Provider>
          </div>

          <Button
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </main>
  );
}

export default Form;