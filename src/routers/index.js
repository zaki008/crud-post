import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Post, PostForm } from '../pages';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Post />} />
        <Route path='/post/create' element={<PostForm />} />
        <Route path='/post/edit/:id' element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
