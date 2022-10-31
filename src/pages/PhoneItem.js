import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './PhoneItem.css';

const PhoneItem = props => {
  return (
    <li className="phone-item">
      <Card className="phone-item__content">
        <div className="phone-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="phone-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PhoneItem;
