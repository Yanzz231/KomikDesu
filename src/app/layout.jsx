import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  style: 'normal',
  display: 'swap'
});

export const metadata = {
  title: "Komikdesu - Baca Komik Online",
  description: "s",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-color-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
