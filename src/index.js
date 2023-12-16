import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize';
import './index.css';
import { ContextProvider } from 'context/FeedbackContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ContextProvider>
      <App />
    </ContextProvider>
  </>
);
