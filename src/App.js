import './App.css';
import Header from './components/Header';
import Steps from './components/Steps';
import PersonalInfo from './pages/PersonalInfo';
import WorkspaceName from './pages/WorkspaceName';
import Streamline from './pages/Streamline';
import FinalPage from './pages/FinalPage';
import { useState } from 'react';
import Form from './components/Form';


function App() {

  // const [currentStep, setCurrentStep] = useState(1)

  // const displaySteps = (step) => {
  //   switch (step) {
  //     case 1:
  //       return <PersonalInfo />
  //     case 2:
  //       return <WorkspaceName />
  //     case 3:
  //       return <Streamline />
  //     case 4:
  //       return <FinalPage />
  //     default:
  //       return <PersonalInfo />
  //   }
  // }

  return (
    <div >
      {/* <Header />
      <div className='md:w-1/2  mx-auto flex flex-col justify-center items-center'>
        <div className='w-7/12 '>
          <Steps currentStep={currentStep} />
        </div>
        {/* <PersonalInfo /> */}
      {/* <WorkspaceName /> */}
      {/* <Streamline /> */}
      {/* <FinalPage /> */}

      {/* </div> */}
      <Form />
    </div>
  );
}

export default App;
