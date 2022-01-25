import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import { getReserved } from '../redux/rockets/rockets';

const ReserveBtn = (props) => {
  const dispatch = useDispatch();
  const rocket = props;
  const { reserve, id } = rocket;
  const handleReserve = () => {
    const update = !reserve;
    const setReserve = () => ({ btnId: id, reserve: update });
    dispatch(getReserved(setReserve()));
  };

  return (
    <div>
      <button type="button" onClick={handleReserve}>
        {reserve ? 'Cancel Reservation' : 'Reserve Rocket'}
      </button>
    </div>
  );
};
export default ReserveBtn;
