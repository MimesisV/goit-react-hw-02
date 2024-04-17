import { useState, useEffect } from 'react';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  const initialValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [values, setValues] = useState(() => {
    const storedValues = JSON.parse(localStorage.getItem("feedback"));
    return storedValues !== null ? storedValues : initialValues});

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedback => {
    setValues({
      ...values,
      [feedback]: values[feedback] +1
    })
  }

  const resetFeedback = ()=> {
    setValues(initialValues);
    localStorage.setItem('feedback', JSON.stringify(initialValues));
    }
  
  const total = values.good + values.neutral + values.bad;
  const positiveFeedback = total > 0 ? Math.round((values.good / total) * 100) : 0;

  return (
    <div>
      <Description />
      <Options onUpdate={updateFeedback} total={total} onReset={resetFeedback}/>
      {total === 0 ? <Notification/> : <Feedback data={values} total={total} positive={positiveFeedback}/>}
    </div>
  );
}