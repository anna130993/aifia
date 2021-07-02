import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMuiTheme, StylesProvider, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import {store} from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Product from './components/views/Product/Product';
import Cart from './components/views/Cart/Cart';
import Order from './components/views/Order/Order';
import About from './components/features/About/About';
import StepperShop from './components/layout/StepperShop/StepperShop';
import PP from './components/features/PP/PP';
import TC from './components/features/TC/TC';
import Size from './components/features/Size/Size';
import Payment from './components/features/Payment/Payment';
import Shipping from './components/features/Shipping/Shipping';
import Returns from './components/features/Returns/Returns';

const theme = createMuiTheme({
  palette: {
    common: { white: '#dcdde1', black: '#2d3436'},
    secondary: { main: '#341f97', contrastText: '#dfe6e9'},
    primary: { main: '#4834d4'},
    info: { main: '#c8d6e5'},
    success: { main: '#78e08f'},
    background: { paper: '#c8d6e5', default: '#9980FA' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/privacy-policy' component={PP} />
              <Route exact path='/terms-and-conditions' component={TC} />
              <Route exact path='/payment-options' component={Payment} />
              <Route exact path='/size-guide' component={Size} />
              <Route exact path='/shipping' component={Shipping} />
              <Route exact path='/returns' component={Returns} />
              <Route exact path='/products/:id' component={Product} />
              <StepperShop>
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/order' component={Order} />
              </StepperShop>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
