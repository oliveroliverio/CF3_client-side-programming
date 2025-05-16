import React from 'react';
import { createRoot } from 'react-dom/client';
import MainView from './components/main-view/main-view';
import './index.css';

// Get the root element from the HTML document
const container = document.getElementById('root');
const root = createRoot(container);

// Render the MainView component in the root element
root.render(<MainView />);
