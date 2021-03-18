

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';

const Router = () => {
  const [theme, setTheme] = React.useState('light');
  let currentObserver = null;

  return (
    <BrowserRouter>
      <Header
        getObserver={(observer) => {
          currentObserver = observer;
        }}
        onThemeChange={(theme) => setTheme(theme)}
      />

      <Switch>
        <Route path="*" render={() => <Home observer={currentObserver} theme={theme} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
