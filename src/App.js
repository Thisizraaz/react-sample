import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <header className="header">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
      name="description"
      content="ProductReactWebSite site created using create-react-app"
      />
        <h1>My Products</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;