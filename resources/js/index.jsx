import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';

// const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})