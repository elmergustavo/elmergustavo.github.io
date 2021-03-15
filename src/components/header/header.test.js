import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header';

test('Header Component', () => {
  const observe = jest.fn();

  window.IntersectionObserver = jest.fn(function() {
    this.observe = observe;
  });

  render(
    <BrowserRouter>
      <Switch>
        <Route path="*">
          <Header getObserver={(_observer) => {}} />
        </Route>
      </Switch>
    </BrowserRouter>
  );

  const texts = [
    screen.getByText(/Daniel Solarte Chaverra/g),
    screen.getByText(/About me/g),
    screen.getByText(/Projects/g),
    screen.getByText(/Skills/g),
    screen.getByText(/Contact/g),
  ];

  texts.forEach((text) => {
    expect(text).toBeInTheDocument();
  });
});
