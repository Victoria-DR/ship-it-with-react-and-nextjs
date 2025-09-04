import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do App",
  description:
    'Demo for "Ship It With React & Next.js" workshop by Victoria Da Rosa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
