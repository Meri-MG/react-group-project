import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { getMissionFromApi } from '../redux/missions/missions';
import Missions from './Mission';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    dispatch(getMissionFromApi());
  }, []);
  return (
    <div className="title">
      {missions.map((mission) => (
        <Missions key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionList;
