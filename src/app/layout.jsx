import { Lexend , Lexend_Tera } from "next/font/google";
import React from 'react';

export const metadata = {
  title: "Ja'la: The Game of Life",
  description: "A life skills tracker",
};

// this file is where the site's header and footer should go

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}