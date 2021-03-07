import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

it('shows the logo', () => {
  const { getByAltText } = render(<Header />);

  expect(getByAltText('logo')).toBeInTheDocument();
});
