import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import AppAction from '../../redux/action/AppAction';

const HomeScreen = () => {
    const movieData = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AppAction.getMovies());
    }, []);

    console.log('movieList', movieData);

    return <></>
}

export default HomeScreen