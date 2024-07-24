import '../styles/globals.css'; // グローバルCSSをインポート
import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
        {/* <ThemeProvider theme={theme}>
          <CssBaseline /> */}
          {children}
        {/* </ThemeProvider> */}
        </ ThemeProviderWrapper>
      </body>
    </html>
  );
}