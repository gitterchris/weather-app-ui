import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MockDate from 'mockdate';
import Header from './header';

jest.mock('./services');

describe('on rendering the header', () => {
  afterAll(() => {
    MockDate.reset();
  });

  it('shows the date tomorrow', async () => {
    MockDate.set('2021-03-08T00:00:00');

    const { getByText } = render(<Header />);

    await waitFor(() => {
      expect(getByText(/Mar 9, 2021/)).toBeVisible();
    });
  });

  describe('when it is morning time', () => {
    it('shows Good Morning!', async () => {
      MockDate.set('2021-03-08T00:00:00');

      const { getByText } = render(<Header />);

      await waitFor(() => {
        expect(getByText('Good Morning!')).toBeVisible();
      });
    });
  });

  describe('when it is afternoon time', () => {
    it('shows Good Afternoon!', async () => {
      MockDate.set('2021-03-08T12:00:00');

      const { getByText } = render(<Header />);

      await waitFor(() => {
        expect(getByText('Good Afternoon!')).toBeVisible();
      });
    });
  });

  describe('when it is past 7PM', () => {
    it('shows Good Evening!', async () => {
      MockDate.set('2021-03-08T20:00:00');

      const { getByText } = render(<Header />);

      await waitFor(() => {
        expect(getByText('Good Evening!')).toBeVisible();
      });
    });
  });
});
