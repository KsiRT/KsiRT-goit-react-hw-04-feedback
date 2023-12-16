import React from 'react';
import { Container, Heading } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {children}
    </Container>
  );
};
