<<<<<<< HEAD
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme/theme';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

=======
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme/theme';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

>>>>>>> efca81d441df5ac008df521069edf8fd64f395d6
export default ThemeProviderWrapper;