import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {selectMovies} from '../features/movie/movieSlice'; 
import {useSelector} from 'react-redux';
import firebase from '../firebase'
import { Link } from 'react-router-dom';

function Movies(props) {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    // const movies = useSelector(selectMovies);
    // console.log('this is the movies list', movies);
    const [movieList,setMovieList] = useState();

    useEffect(() => {
      const movieRef = firebase.database().ref('Movie');
      movieRef.on('value',(snapshot) => {
        const movieList = [];
        const results = snapshot.val(); 
        for(let id in results){
          movieList.push(results[id]);
        }
        // console.log(movieList);
        setMovieList(movieList);
      });
    },[])

    return (
      <Container>
        <h4>Recommended for You</h4>
        <Content>
          {movieList &&
            movieList.map((movie) => (
              <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={IMGPATH + movie.poster_path} alt="poster image" />
                </Link>
              </Wrap>
            ))}
        </Content>
      </Container>
    );
}

export default Movies


const Container = styled.div`


`

const Content = styled.div`
    padding: 20px 0;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

`   

const Wrap = styled.div`

    border: 3px solid rgba(249,249,249,.1);
    border-radius: 10px;
    overflow:hidden;
    box-shadow: (0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cub-bezier(.25,.46,.45,.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform:scale(1.05);
        border-color: rgba(249,249,249,.8);
    }

`;