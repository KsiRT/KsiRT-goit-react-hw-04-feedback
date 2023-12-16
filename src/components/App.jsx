import React from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
        // **options={(good, neutral, bad)}
        // **onLeaveFeedback={() => handleBtnClick()}
        />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
          // ** good={good}
          // **neutral={neutral}
          // **bad={bad}
          // **total={countTotalFeedback()}
          // **positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback yet :("></Notification>
      )}
    </>
  );
};
