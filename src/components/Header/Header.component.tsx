import React, { FunctionComponent } from 'react';

import { Container } from './Header.styles';
import { GroupingSelectBox } from '../GroupingSelectBox';

interface HeaderProps {
  options: number[];
}

const Header: FunctionComponent<HeaderProps> = ({ options }) => {
  return (
    <Container>
      <h3>Order Book</h3>
      <GroupingSelectBox
        options={options}
        onChange={() => {}}
      />
    </Container>
  );
};

export default Header;
