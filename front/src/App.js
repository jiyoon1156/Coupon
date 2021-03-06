import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreateCoupon from './pages/createCoupon';
import CouponList from './pages/couponList';

const App = () => (
  // <>
  //   <CreateCoupon />
  //   <CouponList />
  // </>
  <BrowserRouter>
    <Route exact path="/" component={CreateCoupon} />
    <Switch>
      <Route path="/list" component={CouponList} />
    </Switch>
  </BrowserRouter>
);

export default App;
