import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => state.rocketsReducer);
  const reservedRockets = data.filter((rocket) => rocket.reserve === true);
  return (
    <ul>
      {reservedRockets.map((rocket) => (
        <li key={rocket.id}>{rocket.rocket_name}</li>
      ))}
    </ul>
  );
};

export default MyProfile;
