import React from 'react';
import { Container, Heading } from './NotificationStyled';

export const Notification = ({ message }) => {
  return (
    <Container>
      <Heading>{message}</Heading>
    </Container>
  );
};
