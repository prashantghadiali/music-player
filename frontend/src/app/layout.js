"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import theme from './theme'

// const breakpoints = {
//   sm: '30em',   // 480px
//   md: '48em',   // 768px
//   lg: '62em',   // 992px
//   xl: '80em',   // 1280px
// };
// const inter = Inter({ subsets: ["latin"] });
// const theme = extendTheme({ breakpoints });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Provider store={store}><ChakraProvider theme={theme}>{children}</ChakraProvider></Provider></body>
    </html>
  );
}
