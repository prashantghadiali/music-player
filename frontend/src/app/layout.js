"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '30em',   // 480px
  md: '48em',   // 768px
  lg: '62em',   // 992px
  xl: '80em',   // 1280px
};
const inter = Inter({ subsets: ["latin"] });
const theme = extendTheme({ breakpoints });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><ChakraProvider theme={theme}>{children}</ChakraProvider></body>
    </html>
  );
}
