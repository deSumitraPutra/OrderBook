import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer.component';

describe('Footer', () => {
  const props = {
    toggleFeedCallback: jest.fn(),
    killFeedCallback: jest.fn(),
    isFeedKilled: false
  };

  it('should render button toggle feed and button kill feed', () => {
    render(<Footer {...props} />);
    const toggleFeedButton = screen.getByText(/Toggle feed/i);
    const killFeedButton = screen.getByText(/Kill feed/i);

    expect(toggleFeedButton).toBeInTheDocument();
    expect(killFeedButton).toBeInTheDocument();
  });

  it('should render button renew feed', () => {
    render(<Footer {...props} isFeedKilled />);
    const renewFeedButton = screen.getByText(/Renew feed/i);

    expect(renewFeedButton).toBeInTheDocument();
  });
});
