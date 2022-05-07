import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTelegramPlane, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import * as S from './Footer.styled';

const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <S.Me>Temirlan Baibolov</S.Me>
      <S.List>
        <S.ListItem>
          <S.ExternalLink href="https://t.me/bthero">
            <FontAwesomeIcon icon={faTelegramPlane} />
          </S.ExternalLink>
        </S.ListItem>
        <S.ListItem>
          <S.ExternalLink href="mailto:bthero09@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </S.ExternalLink>
        </S.ListItem>
        <S.ListItem>
          <S.ExternalLink href="https://www.linkedin.com/in/bthero/">
            <FontAwesomeIcon icon={faLinkedin} />
          </S.ExternalLink>
        </S.ListItem>
        <S.ListItem>
          <S.ExternalLink href="https://github.com/BThero">
            <FontAwesomeIcon icon={faGithubSquare} />
          </S.ExternalLink>
        </S.ListItem>
      </S.List>
    </S.Footer>
  );
};

export default Footer;
