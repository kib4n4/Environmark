import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

const Root = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

export default Root;
