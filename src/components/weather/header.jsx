import React from 'react';
import moment from 'moment';
import { Header as UIHeader, Icon } from 'semantic-ui-react';
import { dateTime } from '../../lib';

const Header = () => {
  const { text, icon } = getGreeting();
  const tomorrow = moment().add(1, 'day').format(dateTime.longDate);

  return (
    <UIHeader
      dividing
      as="h1"
    >
      <Icon name={icon} />
      <UIHeader.Content>
        Good {text}!
        <UIHeader.Subheader>
          Here are the forecast for tomorrow, {tomorrow}.
        </UIHeader.Subheader>
      </UIHeader.Content>
    </UIHeader>
  );
};

function getGreeting() {
  const today = new Date();
  if (today.getHours() < 12) return { icon: 'sun', text: 'Morning' };
  if (today.getHours() < 19) return { icon: 'cloud', text: 'Afternoon' };
  return { icon: 'moon', text: 'Evening' };
}

export default Header;
