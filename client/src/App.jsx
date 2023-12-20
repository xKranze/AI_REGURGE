import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, logo1 } from './assets';
import { Home, CreatePost } from './page';

const App = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo1} alt="logo" className="w-28 object-contain" />
      </Link>
      

    </header>
      </BrowserRouter>
    </h1>
  )
}

export default App