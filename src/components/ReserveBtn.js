import React from 'react';
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
      {!reserve ? (
        <button
          className="reservationBtn"
          type="button"
          onClick={handleReserve}
        >
          Reserve Rocket
        </button>
      ) : (
        <button
          className="cancelBtn"
          type="button"
          onClick={handleReserve}
        >
          Cancel Reservation
        </button>
      )}
    </div>
  );
};
export default ReserveBtn;
