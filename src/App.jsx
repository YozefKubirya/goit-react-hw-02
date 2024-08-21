import { useState ,useEffect} from 'react'
import './App.css'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification'
function App() {
const [values,setValues]=useState(()=>{
  const savedValue=window.localStorage.getItem('saved-values');
  if (savedValue !== null) {
    return JSON.parse(savedValue);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
    
  }
})
useEffect(()=>{
window.localStorage.setItem('saved-values',JSON.stringify(values))
},[values])

const updateFeedback = feedbackType => {
  setValues(
(prevValues)=>({
  ...prevValues,
  [feedbackType]:prevValues[feedbackType]+1,

})
  )
  };
  
const resetUpdates=()=>{
  setValues({
    good: 0,
    neutral: 0,
    bad: 0,})
} 
const totalFeddback=values.good+values.neutral+values.bad;
const positiveFeedback=Math.round((values.good / totalFeddback) * 100)

  return (
    <>
    <h1>Sip Happens Café
    </h1>
    <p>Please leave your feedback about our service by selecting one of the options below.
    </p>
<Options onUpdate={updateFeedback} onReset={resetUpdates} total={totalFeddback}/>
{totalFeddback===0?(<Notification/>):(<Feedback values={values} total={totalFeddback} positiveFeedback={positiveFeedback}/>)}
    </>
     
  )
}

export default App
