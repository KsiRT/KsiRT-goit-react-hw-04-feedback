import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export const ContextProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleBtnClick = e => {
    if (e.target.name === 'good') {
      setGood(prev=> prev + 1);
    }
    if (e.target.name === 'neutral') {
      setNeutral(prev=> prev + 1);
    }
    if (e.target.name === 'bad') {
      setBad(prev=> prev + 1);
    }
  };
  const countTotalFeedback = () => {
    setTotal(good + neutral + bad);
    return total;
  };

  const countPositive = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };
  const contextValue = {
    good,
    neutral,
    bad,
    total,
    handleBtnClick,
    countTotalFeedback,
    countPositive,
    options,
  };

  return (
    <FeedbackContext.Provider value={contextValue}>
      {children}
    </FeedbackContext.Provider>
  );
};
