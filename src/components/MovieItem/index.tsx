import React from 'react';
import { Movie } from '../../model/MoviesModel/Movie';
import {
  TransactionStyle,
  ImageContainer,
  TitleStyle,
} from './styled';

interface OneItem {
  item: Movie;
} 

interface MoviItemProps {
  movie: OneItem;
  nav: any,
}

export default function MoviItem({
    movie,
    nav
}: MoviItemProps) {


  const { item } = movie;

  return (
    <TransactionStyle onPress={() => nav('DetailScreen', { itemId: item.imdbID})}>
      <ImageContainer  source={{ uri: item.Poster }} />
      <TitleStyle>{item.Title}</TitleStyle>
    </TransactionStyle>
  );
}