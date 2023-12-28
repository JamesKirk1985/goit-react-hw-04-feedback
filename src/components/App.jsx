import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


export const App =() => {
  const [feedBack, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })   
  
  function addFeedback(evt) {    
    setFeedBack((prev) => {
      const nameValue = evt.target.textContent.toLowerCase();
      const newFeedback = {
        good: prev.good,
        neutral: prev.neutral,
        bad: prev.bad
        };
      newFeedback[nameValue] = prev[nameValue] + 1;      
      return newFeedback
    })    
  }
  
  function countTotalFeedback() {       
    return (feedBack.good + feedBack.neutral + feedBack.bad)
  }

  function countPositiveFeedbackPercentage() {    
    return (feedBack.good / countTotalFeedback()).toFixed(2) * 100 || "0";
  }

    return <>
      <Section title="Please leave feedback">

      <FeedbackOptions
          onLeaveFeedback={addFeedback}
        options={feedBack}>        
        </FeedbackOptions>      
        {countTotalFeedback() === 0 ? 
          <Notification message="There is no feedback"></Notification> :
          <Statistics
        good={feedBack.good}
        neutral={feedBack.neutral}
        bad={feedBack.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}>        
        </Statistics> 
        }
      </Section>      
    </>
  }

// export const App = () => {
//   return (
//     <Feedback />
//   )
// };
