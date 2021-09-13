import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ArticleProvider } from './util/context';

ReactDOM.render(
  <React.StrictMode>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

