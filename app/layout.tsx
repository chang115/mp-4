import React from 'react';
import Header from '../components/Header';

export default function RootLayout(
  {children,}:
  Readonly<{children: React.ReactNode;}>
){
  return(
    <html lang="en">
      <head/>
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
      
    </html>
  )
}