import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="images/viewers-disney.png" alt="container image"/>
            </Wrap>
            <Wrap>
                <img src="images/viewers-pixar.png" alt="container image"/>
            </Wrap>
            <Wrap>
                <img src="images/viewers-marvel.png" alt="container image"/>
            </Wrap>
            <Wrap>
                <img src="images/viewers-starwars.png" alt="container image"/>
            </Wrap>
            <Wrap>
                <img src="images/viewers-national.png" alt="container image"/>
            </Wrap>
        </Container>
    )
}

export default Viewers


const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5,minmax(0,1fr));
    grid-gap: 25px;
    padding: 30px 0 26px;

`

const Wrap = styled.div`
    
    border: 3px solid rgba(249,249,249,.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cub-bezier(.25,.46,.45,.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,.8)
    }

`
