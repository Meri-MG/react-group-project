import React from 'react';

const ReserveBtn = (props) => {
  const rocket = props;
  const { reserve, handleReserve } = rocket;
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
