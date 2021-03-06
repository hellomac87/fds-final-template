import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import UserProvider from './contexts/UserContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            {/* <Switch> */}
            {/* exact prop 이 있을 때는 :: 주소가 정확히 일치해야만 페이지가 그려짐 */}
            {/* exact prop 이 없을 때는 :: 주소가 path로 시작하면 페이지가 그려짐 */}
            <Route exact path="/" component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/login" component={LoginPage} />
            {/* </Switch> */}
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
