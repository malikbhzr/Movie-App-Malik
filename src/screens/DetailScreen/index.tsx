import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, FlatList, View, Text, Image, ActivityIndicator, } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import AppAction from '../../redux/action/AppAction';

const DetailScreen = () => {
    const movieData = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(AppAction.getItemDetails('tt4154664'));
    }, []);

    console.log('movieDatamovieData', movieData);

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1d1e28' }}>
        </SafeAreaView>
    )
}

export default DetailScreen