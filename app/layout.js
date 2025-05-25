// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AgriSense',
  description: 'Smart Agriculture Monitoring System',
  themeColor: '#34d399',          // nice green PWA tint
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-gradient-to-br from-green-50 via-sky-50 to-emerald-100">
      <body className={`${inter.className} antialiased text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
