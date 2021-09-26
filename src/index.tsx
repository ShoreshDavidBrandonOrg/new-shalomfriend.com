import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import 'focus-visible/dist/focus-visible';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Footer } from './components/Footer';
import { ErrorBoundary } from './ErrorBoundary';
import { useScrollToTop } from './hooks/useScrollToTop';
import * as screens from './screens';
import { persistor, store } from './store/store';
import { theme } from './utils/theme';

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  iframe {
    width: 100%;
    max-width: 100%;
  }
`;

const Router = () => {
  useScrollToTop();

  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={screens.Home} />

        <Redirect exact path="/services" to="/services/rabbi-don" />
        <Route
          exact
          path="/services/:category"
          component={screens.ServiceList}
        />
        <Route
          exact
          path="/services/:category/:slug"
          component={screens.SingleService}
        />
        <Route exact path="/articles" component={screens.Articles} />
        <Route exact path="/articles/:slug" component={screens.Articles} />
        <Route exact path="/privacy-policy" component={screens.PrivacyPolicy} />
        <Route component={screens.NotFound} />
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};

render(
  <ChakraProvider theme={theme} resetCSS>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);
