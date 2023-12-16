import React, { useContext } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackContext } from 'context/FeedbackContext';

export const App = () => {
  const { countTotalFeedback } = useContext(FeedbackContext);

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics />
        </Section>
      ) : (
        <Notification message="There is no feedback yet 😢"></Notification>
      )}
    </>
  );
};
