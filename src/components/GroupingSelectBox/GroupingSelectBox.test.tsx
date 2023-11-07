import React from 'react';
import { render, screen } from '@testing-library/react';

import GroupingSelectBox from './GroupingSelectBox.component';

test('renders a select box with certain grouping options', () => {
  const onChange = jest.fn();

  render(
    <GroupingSelectBox
      options={[0.5, 1, 2.5]}
      onChange={onChange}
    />
  );
  const selectElement = screen.getByTestId(/groupings/i);
  expect(selectElement).toBeInTheDocument();
  let optionElement = screen.getByText(/Group 0.5/i);
  expect(optionElement).toBeInTheDocument();

  render(
    <GroupingSelectBox
      options={[0.05, 0.1, 0.25]}
      onChange={onChange}
    />
  );
  optionElement = screen.getByText(/Group 0.5/i);
  expect(optionElement).toBeInTheDocument();
});
