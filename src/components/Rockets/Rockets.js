import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsFromAPI } from '../../redux/rockets/rockets';
import RocketItem from './RocketItem';

const Rockets = () => {
  const data = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data[0]) {
      dispatch(getRocketsFromAPI());
    }
  }, []);

  return (
    <div>
      <hr />
      <ul>
        {data.map((rocket) => (
          <RocketItem key={rocket.id} data={rocket} />
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
