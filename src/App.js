import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import PDP from './components/PDP';
import Pizzas from './components/Pizzas';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function App({ products, currentItem }) {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Products
            heading="Choose your favorite"
            type="pizzas"
            data={products[0]}
          />
          <Feature />
          <Products
            heading="Sweet Treats for You"
            type="desserts"
            data={products[0]}
          />
        </Route>
        <Route path="/cart" component={Cart} />
        <Route path="/pizzas">
          <Pizzas data={products[0]} component={Pizzas} />
        </Route>
        <Route path="/desserts">
          <Pizzas data={products[0]} component={Pizzas} />
        </Route>
        {!currentItem ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/product/:id" component={PDP} />
        )}
      </Switch>

      <Footer />
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
