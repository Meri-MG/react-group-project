import React from 'react';
import ReserveBtn from './ReserveBtn';

const RocketItem = (props) => {
  const rocket = props;

  return (
    <div className="rockets-wrapper">
      <img src={rocket.data.flickr_images[0]} alt="rocket" />
      <div>
        <h2>{rocket.data.rocket_name}</h2>
        <p>
          {rocket.data.reserve && <span className="reserve-badge">Reserved</span>}
          {rocket.data.description}
        </p>
        <ReserveBtn reserve={rocket.data.reserve} id={rocket.data.id} />
      </div>
    </div>
  );
};

export default RocketItem;
