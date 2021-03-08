import React, { useState, useEffect } from 'react';
import { Card, Divider, Image, Loader, Message } from 'semantic-ui-react';
import moment from 'moment';
import { startCase } from 'lodash';
import { dateTime } from '../../lib';
import { Header, ExtraContent, CurrentTemp, getForecast, cities, ids } from '.';

const Weather = () => {
  const [ forecast, setForecast ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      const tomorrow = moment().add(1, 'days').format(dateTime.iso);
      return Promise.all(cities.map(city => getForecast(ids[city], tomorrow)))
        .then(values => setForecast(values.map((v, i) => ({ city: cities[i], ...v }))))
        .catch(() => setHasError(true))
        .finally(() => !didCancel && setLoading(false));
    }

    fetchData();
    return () => { didCancel = true; };
  }, []);

  return (
    <div className="weather-page">
      <Header />
      <Loader
        active={isLoading}
        size="massive"
      >
        Getting weather information...
      </Loader>
      {hasError && (
        <Message
          negative
          icon="exclamation triangle"
          header="Cannot retrieve weather information"
          content="Please try again later"
        />
      )}
      <Card.Group itemsPerRow={2}>
        {forecast.map(f => (
          <Card
            key={f.city}
          >
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={`https://www.metaweather.com/static/img/weather/png/64/${f.weather_state_abbr}.png`}
              />
              <Card.Header>
                {startCase(f.city)}
              </Card.Header>
              <Card.Meta>
                {f.weather_state_name}
              </Card.Meta>
              <CurrentTemp
                forecast={f}
              />
              <Divider />
              <ExtraContent
                forecast={f}
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Weather;
