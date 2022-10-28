'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { AppProvider } from './AppContext'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32,
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          noWrap: true,
        },
      },
      styleOverrides: {
        inset: {
          paddingLeft: 32,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: 'right',
        arrow: true,
      },
    },
  },
})

const App = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppProvider>
      {children}
    </AppProvider>
  </ThemeProvider>
)

export default App
