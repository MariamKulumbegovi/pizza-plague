import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import PDP from './components/PDP';
import Pizzas from './components/Pizzas';
import Deserts from './components/Deserts';


function App() {

 
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>
      <Switch >
          <Route exact path='/' >
          <Hero />
          <Products heading='Choose your favorite' data={productData} />
          <Feature />
          <Products heading='Sweet Treats for You' data={productDataTwo} />
          </Route>
          <Route path='/cart' component={Cart} />
          <Route path='/pizzas'>
            <Pizzas  data={productData} component={Pizzas}  />
          </Route>
          <Route path='/desserts'>
            <Pizzas  data={productDataTwo} component={Deserts}  />
          </Route>
          <Route exact path='/product/:id' component={PDP}/>
      </Switch>
     
      <Footer />
    </Router>
  );
}

export default App;
