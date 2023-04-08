import React from 'react'
import { HeaderPage } from '../components/header/header'
import { FooterPage } from '../components/footer/footer-page'

export const Mainlayout = ({children}) => {
  return (
   <>
   <HeaderPage/>
   {children}
   <FooterPage/>
   </>
  );
};

