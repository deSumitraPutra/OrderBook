import React, { FunctionComponent } from 'react';

import { Container } from './Button.styles';

interface ButtonProps {
  title: string,
  backgroundColor: string,
  callback: () => void
};

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { title, backgroundColor, callback } = props;
  return (
    <Container $backgroundColor={backgroundColor} onClick={callback}>
      {title}
    </Container>
  )
};

export default Button;