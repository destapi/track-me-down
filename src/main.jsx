import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

const updatedTheme = createTheme({
  // Extend the theme to update the button color
  name: "my-theme-updates",
  tokens: {
    components: {
      button: {
        primary: {
          backgroundColor: {
            value: "#b71c1c"
          },
        },
      },
    },
  },
}, studioTheme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={updatedTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
