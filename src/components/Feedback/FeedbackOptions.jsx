import React, { useContext } from 'react';
import { Button, Item, List } from './FeedbackOptionsStyled';
import { FeedbackContext } from 'context/FeedbackContext';

export const FeedbackOptions = () => {
  const { options, handleBtnClick } = useContext(FeedbackContext);

  const buttons = options.map(option => (
    <Item key={option}>
      <Button type="button" onClick={handleBtnClick} name={option}>
        {option}
      </Button>
    </Item>
  ));
  return <List>{buttons}</List>;
};
