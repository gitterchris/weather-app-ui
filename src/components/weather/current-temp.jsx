import React from 'react';
import t from 'prop-types';
import { Card, Statistic } from 'semantic-ui-react';

const CurrentTemp = ({
  forecast,
}) => (
  <Card.Description textAlign="center">
    <Statistic>
      <Statistic.Value>
        {Math.round(forecast.the_temp)}&deg;C
      </Statistic.Value>
      <Statistic.Label>
        H: {Math.round(forecast.max_temp)}&deg; L: {Math.round(forecast.min_temp)}&deg;
      </Statistic.Label>
    </Statistic>
  </Card.Description>
);

CurrentTemp.propTypes = {
  forecast: t.shape({
    the_temp: t.number,
    max_temp: t.number,
    min_temp: t.number,
  }).isRequired,
};

export default CurrentTemp;
