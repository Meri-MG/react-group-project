import React from 'react';
import ReserveBtn from './ReserveBtn';

const RocketItem = (props) => {
  const rocket = props;

  return (
    <div>
      <img src={rocket.data.flickr_images[0]} alt="rocket" />
      <div>
        <h2>{rocket.data.rocket_name}</h2>
        <p>{rocket.data.description}</p>
        <ReserveBtn />
      </div>
    </div>
  );
};

export default RocketItem;
