import { useState } from "react";

const messages = ["learn react", "apply for jobs", "invest your new income"];

export default function App() {
 const [step, setStep] = useState(1)
const [isOpen, setisOpen] = useState(true)
  function handlePrevious (){
  if(step > 1)  setStep(step -1)
  }
  function handleNext (){
    if(step < 3)  setStep(step + 1)
  }
  return (
    <>
      <button className="close" onClick={()=>setisOpen(!isOpen)}>&times;</button>
      {isOpen && (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>
          previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
          next
        </button>
      </div>
    </div>
)}
    </>
  );
}
