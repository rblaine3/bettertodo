import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BottomNav from '@/components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Better ToDo',
  description: 'A better way to manage your tasks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.className} h-full bg-zinc-900`}>
      <body className="h-full text-zinc-100">
        <div className="flex flex-col h-full">
          <main className="flex-1 overflow-auto pb-16">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
