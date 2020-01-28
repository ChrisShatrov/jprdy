import React from 'react';
import { render } from '@testing-library/react';
import ClueCard from './ClueCard';

test('renders learn react link', () => {
  const { getByText } = render(<ClueCard />);
  const linkElement = getByText(/Show Answer/i);
  expect(linkElement).toBeInTheDocument();
});
