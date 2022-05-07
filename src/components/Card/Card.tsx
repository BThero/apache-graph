import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Card.styled';

interface ICardProps {
  title: string;
  description: string;
  image: string;
  to: string;
}

const Card = ({ title, description, image, to }: ICardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <S.Card
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <p>{description}</p>
    </S.Card>
  );
};

export default Card;
