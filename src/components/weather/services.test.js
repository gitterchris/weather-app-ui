import { getForecast } from './services';
import { axios } from '../../lib';

it('performs a GET request to the locations endpoint', async () => {
  axios.get = jest.fn(() => Promise.resolve({ data: '__data__' }));

  const forecast = await getForecast('__id__', '__date__');

  expect(forecast).toBe('__data__');
  expect(axios.get).toBeCalledWith('/weather/locations/__id__?date=__date__');
});
