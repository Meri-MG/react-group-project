import React from 'react';
import { useDispatch } from 'react-redux';
import ReserveBtn from './ReserveBtn';
import { getReserved } from '../../redux/rockets/rockets';

const RocketItem = (props) => {
  const dispatch = useDispatch();
  const rocket = props;
  const handleReserve = () => {
    const update = !rocket.data.reserve;
    const setReserve = () => ({ btnId: rocket.data.id, reserve: update });
    dispatch(getReserved(setReserve()));
  };

  return (
    <div className="rockets-wrapper">
      <img src={rocket.data.flickr_images[0]} alt="rocket" />
      <div>
        <h2>{rocket.data.rocket_name}</h2>
        <p>
          {rocket.data.reserve && <span className="reserve-badge">Reserved</span>}
          {rocket.data.description}
        </p>
        <ReserveBtn
          reserve={rocket.data.reserve}
          id={rocket.data.id}
          handleReserve={handleReserve}
        />
      </div>
    </div>
  );
};

export default RocketItem;
