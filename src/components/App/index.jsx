import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { HomePage } from '../../pages/HomePage';

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
