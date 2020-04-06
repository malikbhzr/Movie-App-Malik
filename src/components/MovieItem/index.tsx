import React from 'react';
import { Movie } from '../../model/MoviesModel/Movie';
import {
  TransactionStyle,
  ImageContainer,
  TitleStyle,
} from './styled';

interface MoviItemProps {
  movie: Movie;
  nav: any,
}

export default function MoviItem({
    movie,
    nav
}: MoviItemProps) {


  console.log('movie', movie);

  return (
    <TransactionStyle onPress={() => nav('DetailScreen', { itemId: movie.imdbID})}>
      <ImageContainer  source={{ uri: movie.Poster }} />
      <TitleStyle>{movie.Title}</TitleStyle>
    </TransactionStyle>
  );
}