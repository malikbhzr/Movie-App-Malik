import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import DetailAction from '../../redux/action/DetailAction';

const DetailScreen = () => {
    const movieData = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction.getMovieDetail('tt4154664'));
    }, []);

    console.log('movieDatamovieData', movieData);

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1d1e28' }}>
        </SafeAreaView>
    )
}

export default DetailScreen