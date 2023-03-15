import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

const container = document.getElementById('app-root');
if (!container) {
    throw new Error('No container found');
}

ReactDOM.createRoot(container).render(
    <App />
);