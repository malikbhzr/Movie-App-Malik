import React, {useEffect, useState} from 'react';
import {ScrollView, SafeAreaView, View, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AppAction from '../../redux/action/AppAction';
import MovieCards from '../../components/MovieCards';
import {Title} from './styled';
import {SearchBar} from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';

const HomeScreen = ({navigation}: any) => {
  const movieData = useSelector(state => state);
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState(null);
  useEffect(() => {
    dispatch(AppAction.getMovies());
    SplashScreen.hide();
  }, []);

  const showMovieList = () => {
    const {navigate} = navigation;
    if (movieData && movieData.appData) {
      const {Search} = movieData.appData.movies;
      return (
        <ScrollView>
          <Title marginTop={20}>Movies on Theatre</Title>
          <MovieCards
            nav={navigate}
            width={230}
            height={340}
            textWidth={230}
            movieList={Search}
            borderRadius={10}
          />
          <Title marginTop={40}>Coming Soon</Title>
          <View style={{marginTop: 64}}>
            <MovieCards
              nav={navigate}
              width={104}
              height={154}
              textWidth={230}
              movieList={Search}
              borderRadius={6}
            />
          </View>
          <View style={{marginTop: 80}}>
            <MovieCards
              nav={navigate}
              width={104}
              height={154}
              movieList={Search}
              borderRadius={6}
            />
          </View>
        </ScrollView>
      );
    }
    return <ActivityIndicator />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1d1e28'}}>
      <SearchBar placeholder="Type Here..." />
      {showMovieList()}
    </SafeAreaView>
  );
};

export default HomeScreen;
