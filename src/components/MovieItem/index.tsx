import React from 'react';
import { View, Text } from 'react-native';
import { Movie } from '../../model/MoviesModel/Movie';
import {
  TransactionStyle,
  ImageContainer,
  TitleStyle,
} from './styled';

interface MoviItemProps {
  movie: Movie;
  height: number,
  width: number,
  borderRadius: number,
}

export default function MoviItem({
    movie,
    height,
    width,
    borderRadius,
}: MoviItemProps) {

  console.log('movie.Postermovie.Poster', movie)

  const { Poster, Title } = movie.item;

  return (
    <TransactionStyle>
      <ImageContainer height={height} width={width} borderRadius={borderRadius} source={{ uri: Poster }} />
      <TitleStyle>{Title}</TitleStyle>
    </TransactionStyle>
  );
}