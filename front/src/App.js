import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import CreateCoupon from './pages/createCoupon';
import CouponList from './pages/couponList';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: inherit;
  vertical-align: baseline;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
}
a {
  color: inherit;
  text-decoration: none;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #E9E9E9;
}
#root {
  width: 100%;
  max-width: 414px;
}
`;

const App = () => (
  // <>
  //   <CreateCoupon />
  //   <CouponList />
  // </>
  <BrowserRouter>
    <GlobalStyle />
    <Route exact path="/" component={CreateCoupon} />
    <Switch>
      <Route path="/list" component={CouponList} />
    </Switch>
  </BrowserRouter>
);

export default App;
