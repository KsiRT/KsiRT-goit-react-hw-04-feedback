import React from 'react';
import { Heading } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Heading>{title}</Heading>
      {children}
    </>
  );
};
