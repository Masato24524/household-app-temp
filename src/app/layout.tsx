'use client'

import '../styles/globals.css'; // グローバルCSSをインポート
import { ReactNode } from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { theme } from './theme/theme';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';
import AppLayout from './components/layout/AppLayout';
import { usePathname } from 'next/navigation';
import { AuthProvider } from './components/AuthComponent';

console.log('layout.tsx is being rendered');

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);

  // 特定のパスでレイアウトを適用しない
  if (pathname === '/') {
    return <>
      <html lang="ja">
        <body>
          {children}
        </body>
      </html>
    </>; // レイアウトなし
  }

  return (
    <html lang="ja">
      <body>
        <AuthProvider>
          <ThemeProviderWrapper>
            <AppLayout>
          {/* <ThemeProvider theme={theme}>
            <CssBaseline /> */}
              {children }
          {/* </ThemeProvider> */}
            </AppLayout>
          </ ThemeProviderWrapper>
        </ AuthProvider>
      </body>
    </html>
  );
}