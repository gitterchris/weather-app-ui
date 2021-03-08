import React from 'react';
import t from 'prop-types';
import { Card, Statistic } from 'semantic-ui-react';

const ExtraContent = ({
  forecast,
}) => (
  <Card.Content extra>
    <Statistic.Group
      size="mini"
      widths="three"
    >
      <Statistic>
        <Statistic.Label>
          Air Pressure
        </Statistic.Label>
        <Statistic.Value>
          {forecast.air_pressure} mb
        </Statistic.Value>
      </Statistic>

      <Statistic>
        <Statistic.Label>
          Humidity
        </Statistic.Label>
        <Statistic.Value>
          {forecast.humidity}%
        </Statistic.Value>
      </Statistic>

      <Statistic>
        <Statistic.Label>
          Visibility
        </Statistic.Label>
        <Statistic.Value>
          {Math.round(forecast.visibility)} miles
        </Statistic.Value>
      </Statistic>
    </Statistic.Group>
  </Card.Content>
);

ExtraContent.propTypes = {
  forecast: t.shape({
    air_pressure: t.number,
    humidity: t.number,
    visibility: t.number,
  }).isRequired,
};

export default ExtraContent;
