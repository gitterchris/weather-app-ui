import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Weather from './weather';
import { getForecast } from './services';

jest.mock('./services');

describe('on successful weather retrieval', () => {
  it('shows a list of weather information for the six cities', async () => {
    getForecast.mockResolvedValue({
      id: '__id__',
      weather_state_name: '__weather_state_name__',
      weather_state_abbr: '__weather_state_abbr__',
      the_temp: 33,
      max_temp: 35,
      min_temp: 32,
      air_pressure: 1,
      humidity: 2,
      visibility: 10,
    });

    const { getByText, getAllByText, queryByText } = render(<Weather />);

    await waitFor(() => {
      expect(getByText('Gothenburg')).toBeVisible();
      expect(getByText('Stockholm')).toBeVisible();
      expect(getByText('Mountain View')).toBeVisible();
      expect(getByText('London')).toBeVisible();
      expect(getByText('New York')).toBeVisible();
      expect(getByText('Berlin')).toBeVisible();
      expect(getAllByText('__weather_state_name__').length).toBe(6);
      expect(getAllByText('33°C').length).toBe(6);
      expect(getAllByText('H: 35° L: 32°').length).toBe(6);
      expect(getAllByText('1 mb').length).toBe(6);
      expect(getAllByText('2%').length).toBe(6);
      expect(getAllByText('10 miles').length).toBe(6);

      expect(queryByText('Cannot retrieve weather information')).toBeNull();
    });
  });
});

describe('on failed weather retrieval', () => {
  it('shows an error message', async () => {
    getForecast.mockRejectedValue(new Error());

    const { getByText } = render(<Weather />);

    await waitFor(() => {
      expect(getByText('Cannot retrieve weather information')).toBeVisible();
    });
  });
});
