import React from 'react';
import Card from 'components/Card';
import firstImage from 'assets/images/first.jpeg';
import secondImage from 'assets/images/second.jpeg';
import * as S from './Welcome.styled';

const Welcome = (): JSX.Element => {
  return (
    <S.Welcome>
      <Card
        image={firstImage}
        title="Investments Targets"
        description="Description 1"
        to="/targets"
      />
      <Card
        image={secondImage}
        title="Predicted Investments"
        description="Description 2"
        to="/predicted"
      />
    </S.Welcome>
  );
};

export default Welcome;
