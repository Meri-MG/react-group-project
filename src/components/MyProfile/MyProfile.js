import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

const MyProfile = () => {
  const data = useSelector((state) => state.rocketsReducer);
  const dragons = useSelector((state) => state.dragonReducer);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  const reservedRockets = data.filter((rocket) => rocket.reserve === true);
  return (
    <div>
      <ul>
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.rocket_name}</li>
        ))}
      </ul>
      <div className={classes.div}>
        <h1>Dragons</h1>
        <ul>
          {reservedDragons.length ? reservedDragons.map((dragon) => (
            <li key={dragon.id}>{dragon.name}</li>
          )) : <li>No Reservation yet</li>}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
