import React from 'react';
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
  nav: any,
}

export default function MoviItem({
    movie,
    height,
    width,
    borderRadius,
    nav
}: MoviItemProps) {


  const { Poster, Title, imdbID } = movie.item;

  return (
    <TransactionStyle onPress={() => nav('DetailScreen', { itemId: imdbID})}>
      <ImageContainer height={height} width={width} borderRadius={borderRadius} source={{ uri: Poster }} />
      <TitleStyle>{Title}</TitleStyle>
    </TransactionStyle>
  );
}