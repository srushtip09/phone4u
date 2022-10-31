import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PhoneItem from './PhoneItem';
import './PhoneList.css';

const PhoneList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No phone found. Maybe create one?</h2>
          <button>Add Phone</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="phone-list">
      {props.items.map(place => (
        <PhoneItem
          key={phone.id}
          id={phone.id}
          name={phone.name}
          image={phone.image}
          price={phone.price}
          portfolio={phone.portfolio}
          brand={phone.brand}
        />
      ))}
    </ul>
  );
};

export default PhoneList;
