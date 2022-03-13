import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Form from './Form'
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
    danger: {
      main: "#dd0101dd"
    }
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',

    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',

    },
    h6: {
      margin: '30px 20px'
    }
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
