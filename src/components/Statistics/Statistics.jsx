import { useContext } from 'react';
import { Item, List } from './StatisticsStyled';
import { FeedbackContext } from 'context/FeedbackContext';

export const Statistics = () => {
  const { good, neutral, bad, total, countPositive } =
    useContext(FeedbackContext);

  return (
    <>
      <List>
        <Item>Good😍:{good}</Item>
        <Item>Neutral🤨: {neutral}</Item>
        <Item>Bad😒: {bad}</Item>
        <Item>Total:{total}</Item>
        <Item>Positive feedback: {countPositive()}%</Item>
      </List>
    </>
  );
};
