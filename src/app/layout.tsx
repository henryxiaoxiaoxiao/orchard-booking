import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Borugi Farms | U-Pick Cherries",
  description: "Secure your cherry picking session at Morgan Hill's finest orchard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
