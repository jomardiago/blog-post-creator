import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProvider from './providers/ApolloProvider';
import App from './App';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
