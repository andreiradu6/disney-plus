import React, {useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectUserName, selectUserPhoto,setUserLogin,setSignOut } from "../features/user/userSlice";
import { useDispatch,useSelector } from "react-redux";
import firebase from '../firebase'
import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));
                navigate('/');
            }
        })
    },[])

    const signIn = () => {
        const googlePriver =  new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googlePriver)
        .then(result => {
            console.log(result);
            const user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));
            localStorage.setItem('token',uuidv4());
            navigate('/');
            
        })
        .catch(err => console.log(err));
    }

    const signOut = () => {
        firebase.auth().signOut()
        .then(() => {
            dispatch(setSignOut());
            localStorage.removeItem('token');
            navigate('/login');
        })
    }

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      {
          !userName ? 
          <LoginContainer>
              <Login onClick={signIn}>LOGIN</Login>
          </LoginContainer>
          :
          <>
            <NavMenu>
        <Link to="/" className="link">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </Link>
        <Link to="/search">
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </Link>
        <Link to="/watchlist">
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </Link>
        <Link to="/originals">
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </Link>
        <Link to="/movies">
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </Link>
        <Link to="/series">
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      <UserImg onClick={signOut} src="/images/slider-badging.jpg" />
          </>
      }
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a,
  Link {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;


const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform:uppercase;
  background-color: rgba(0,0,0,.6);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover{
      background-color: rgba(255,255,255,1);
      color: #000;
      border-color: transparent;
  }
`

const LoginContainer = styled.div`
    flex: 1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`