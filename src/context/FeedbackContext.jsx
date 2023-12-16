import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export const ContextProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = e => {
    if (e.target.name === 'good') {
      setGood(good + 1);
    }
    if (e.target.name === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (e.target.name === 'bad') {
      setBad(bad + 1);
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };
  const contextValue = {
    good,
    neutral,
    bad,
    handleBtnClick,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  };

  return (
    <FeedbackContext.Provider value={contextValue}>
      {children}
    </FeedbackContext.Provider>
  );
};
