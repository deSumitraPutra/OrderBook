import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button.component';

describe('Button', () => {
  it('should render button with title', () => {
    render(
      <Button
        title={'Toggle'}
        backgroundColor={'red'}
        callback={jest.fn}
      />
    );
    const button = screen.getByText(/Toggle/i);
    expect(button).toBeInTheDocument();
  });
});
