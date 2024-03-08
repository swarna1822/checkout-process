import React, { useState,useRef,useEffect } from "react";

const CheckOutProcess = ({ stepsToConfig = [] }) => {
  const [currentstep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft : 0,
    marginRight : 0
  })
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsToConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsToConfig.length]);
  
  if (!stepsToConfig.length) {
    return <></>;
  }
  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsToConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  const caluclateProgressBarWidth =()=>{
    return((currentstep-1)/(stepsToConfig.length-1))*100
  }
  const ActiveComponent = stepsToConfig[currentstep - 1]?.component;
  return (
    <>
      <div className="steper">
        {stepsToConfig.map((step, index) => {
          return (
            <div key={step.name} className={`step ${isComplete || currentstep > index+1 ? "complete":""} 
            ${currentstep === index+1 ? "active" : ""}`}
            ref={(el) => (stepRef.current[index] = el)}>
              <div className="step-number">
                {currentstep > index+1 || isComplete ? (<span>
                    &#10003;
                </span>):(index+1)}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div className="progress-bar"
        //  style={{
        //     width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
        //     marginLeft: margins.marginLeft,
        //     marginRight: margins.marginRight,
        //   }}
        >
            <div className="progress"
             style={{width : `${caluclateProgressBarWidth()}%`}}
            
            >

            </div>
        </div>
      </div>
      <div>
        <center>
           <ActiveComponent />
      {!isComplete && (
        <button className="btn btn-primary mt-2" onClick={handleNext}>
          {currentstep === stepsToConfig.length ? "Finish" : "Next"}
        </button>
      )}
        </center>
      </div>
     
    </>
  );
};

export default CheckOutProcess;
