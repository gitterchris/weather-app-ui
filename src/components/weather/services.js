import { axios } from '../../lib';

// eslint-disable-next-line import/prefer-default-export
export const getForecast = (id, date) => axios
  .get(`/weather/locations/${id}?date=${date}`)
  .then(({ data }) => data);
