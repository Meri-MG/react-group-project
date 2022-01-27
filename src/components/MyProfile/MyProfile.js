import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

const MyProfile = () => {
  const data = useSelector((state) => state.rocketsReducer);
  const dragons = useSelector((state) => state.dragonReducer);
  const missions = useSelector((state) => state.missionsReducer);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  const reservedRockets = data.filter((rocket) => rocket.reserve === true);
  const missionItems = missions.missions.filter((item) => item.join === true);
  return (
    <div className={classes.wrapper}>
      <div className={classes.div}>
        <h2>Rockets</h2>
        <ul>
          {reservedRockets.length ? reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          )) : <li>No Reservation yet</li>}
        </ul>
      </div>
      <div className={classes.div}>
        <h2>Dragons</h2>
        <ul>
          {reservedDragons.length ? reservedDragons.map((dragon) => (
            <li key={dragon.id}>{dragon.name}</li>
          )) : <li>No Reservation yet</li>}
        </ul>
      </div>
      <div className={classes.div}>
        <h2>My Missions</h2>
        <ul>
          {
            missionItems.length ? missionItems.map((mission) => (
              <li key={mission.mission_name}>{mission.mission_name}</li>
            )) : <li>You are yet to join a mission</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
