import React, { FunctionComponent } from 'react';

import { Container } from './Footer.styles';
import { Button } from '../Button';

interface FooterProps {
  toggleFeedCallback: () => void;
  killFeedCallback: () => void;
  isFeedKilled: boolean;
}

const Footer: FunctionComponent<FooterProps> = (props) => {
  const { toggleFeedCallback, killFeedCallback, isFeedKilled } = props;
  return (
    <Container>
      {
        !isFeedKilled && (
          <Button
            title="Toggle Feed"
            backgroundColor={'#5741d9'}
            callback={toggleFeedCallback}
          />
        )
      }
      <Button
        title={isFeedKilled ? 'Renew Feed' : 'Kill Feed'}
        backgroundColor={'#b91d1d'}
        callback={killFeedCallback}
      />
    </Container>
  )
};

export default Footer;