import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('making sure that play button is available', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/play!/i);
  expect(linkElement).toBeInTheDocument();
});

describe("FireEvent", () => {
    test("click works", () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/play!/i);
        linkElement.click();
    });
});