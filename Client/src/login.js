// src/LoginButton.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const LoginButton = ({setloginState, setUserPhoto, setUserName, setshowBottomNav, setshowListYourProperty}) => {
  const navigate = useNavigate();
  const onSuccess = (response) => {
    // console.log('Login Success:', response);
    // Decode the JWT token to get user details
    const decodedToken = jwtDecode(response.credential);
    const userName = decodedToken.name;
    const userPhoto = decodedToken.picture;
    console.log('User Name:', userName);
    console.log('User Photo:', userPhoto);
    setloginState(true);
    localStorage.setItem('userPhoto', userPhoto);
    localStorage.setItem('userName', userName);
    setUserPhoto(userPhoto);
    setUserName(userName);
    
    axios.post('https://bookingdotcom-gkgr.onrender.com/register', {token: response.credential,})
    .then(res => res.data)
    .then(data => {
      console.log('User data:', data);
      setshowBottomNav(true);
      setshowListYourProperty(true);
      navigate('/');
    })
    .catch(error => {
      console.error('Login error:', error);
    });
  };

  const onFailure = (response) => {
    console.error('Login Failed:', response);
  };

  return (
  <div class="d-flex justify-content-center align-items-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onFailure}
    />
    </div>
  );
};

export default LoginButton;