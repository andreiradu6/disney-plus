import React , {useEffect} from 'react'
import styled from 'styled-components'
import Detail from './Detail'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import {useDispatch} from 'react-redux';
import { setMovies, setmovies } from '../features/movie/movieSlice';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
        // console.log(url);

        const getMovies = async (url) => {
          let response = await fetch(url);
          let data = await response.json();
          let tempMovies = data.results.map((movie) => {
            let movieTemplate = {
              id: movie.id,
              poster_path: movie.poster_path,
              backdrop_path: movie.backdrop_path,
              title: movie.title,
              description: movie.overview,
            };

            return movieTemplate;
          });

          dispatch(setMovies(tempMovies));
        };

        // getMovies(url);
        
    },[])
    

    return (
        <Container>
            <ImageSlider />
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x: hidden;
    
    &:before {
        content: "";
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

`