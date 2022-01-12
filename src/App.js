import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import PoemsContext from './utils/PoemsContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import AllPoems from './pages/AllPoems';
import AllPoets from './pages/AllPoets';
import OnePoet from './pages/OnePoet';
import OnePoem from './pages/OnePoem';
import Search from './pages/Search';
import Category from './pages/Category';
import Navbar from './components/Navbar';
import EmailVerified from './components/EmailVerified';
import './App.css';

function App() {
  const [poems, setPoems] = useState([]);
  const [poets, setPoets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const login = async e => {
    e.preventDefault();
    try {
      const form = e.target;
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      };

      const response = await axios.post('http://localhost:5000/api/auth/login', userBody);
      
      const token = response.data;
      localStorage.tokenPoems = token;
      console.log('login success');
      navigate('/');
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const signup = async e => {
    e.preventDefault();
    try {
      const form = e.target;
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      };

      const response = await axios.post('http://localhost:5000/api/auth/signup', userBody);
      localStorage.response = 'User created, please check your email for verification link';
      console.log("signup success");
      navigate('/login');
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };
  
  const logout = async () => {
    localStorage.removeItem('tokenPoems');
    console.log('logout success');
  };

  /*Poems*/
  const getPoems = async () => {
    const response = await axios.get('http://localhost:5000/api/poems');
    setPoems(response.data);
  };

  /*Poets*/
  const getPoets = async () => {
    const response = await axios.get('http://localhost:5000/api/poets');
    setPoets(response.data);
  };

  /*Profile*/
  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenPoems,
      },
    })
    setProfile(response.data)
  };

  /*Rating*/
  const addRating = async (poemId, rating) => {
    try {
      const ratingBody = {
        rating,
      };
      await axios.post(`http://localhost:5000/api/poems/${poemId}/ratings`, ratingBody, {
        headers: {
          Authorization: localStorage.tokenPoems,
        },
      });
      getPoems();
      toast.success("poem reated successfully")
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  /*Categories*/
  const getCategories = async () => { 
    const response = await axios.get('http://localhost:5000/api/categories');
    setCategories(response.data);
  };

  /*Comment*/
  const addComment = async (e) => { 
    if (!localStorage.tokenPoems) {
      console.log('i am return')
      return;
    }
    e.preventDefault();
    try {
      const form = e.target;
      const poemId = form.elements.poemId.value;
      const commentBody = {
        comment: form.elements.comment.value,
      };
      form.elements.comment.value = '';
      await axios.post(`http://localhost:5000/api/poems/${poemId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenPoems,
        },
      });
      getPoems();
    } catch (error) {
      if (error.response) toast.error(error.reponse.data);
      else console.log(error);
    }
  };

  /*Like*/
  const toggleLike = async (poemId) => {
    try{
    await axios.put(`http://localhost:5000/api/poems/${poemId}/like`, {}, {
      headers: {
        Authorization: localStorage.tokenPoems,
      },
    });
    getPoems();
    getProfile();
    toast.success("liked")


  } catch (error) {
    if (error.response) toast.error(error.response.data);
    else console.log(error);
  }
  };

  useEffect(async () => {
    await getPoems();
    await getPoets();
    await getCategories();
  }, []);

  useEffect(async () => {
    if (Object.keys(profile).length === 0 && localStorage.tokenPoems) {
      await getProfile();
    } 
  });

  const store = {
    poems,
    poets,
    categories,
    profile,
    login,
    signup,
    logout,
    addRating,
    addComment,
    toggleLike
  };

  return (
    <PoemsContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Navbar />

        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/login" exact element={ <Login /> } />
          <Route path="/signup" exact element={ <Signup /> } />
          <Route path="/profile" exact element={ <Profile /> } />
          <Route path="/poems" exact element={ <AllPoems /> } />
          <Route path="/poem/:poemId" exact element={ <OnePoem /> } />
          <Route path="/poets" exact element={ <AllPoets /> } />
          <Route path="/poet/:poetId" exact element={<OnePoet />} />
          <Route path="/category/:categoryId" exact element={< Category />} />
          <Route path="/email_verified/:token" exact element={<EmailVerified />} />
          <Route path="/search/:key" exact element={<Search />} />
        </Routes>
    </PoemsContext.Provider>
  );
}

export default App;
