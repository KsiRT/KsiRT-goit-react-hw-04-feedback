import React, { useContext } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { FeedbackContext } from 'context/FeedbackContext';
import { styled } from 'styled-components';

export const App = () => {
  const { countTotalFeedback } = useContext(FeedbackContext);

  return (
    <Container>
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
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e5d1b8;
  height: 100vh;
`;
