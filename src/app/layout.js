import { Lexend , Lexend_Tera } from "next/font/google";

export const metadata = {
  title: "Ja'la: The Game of Life",
  description: "A life skills tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
