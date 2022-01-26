import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { getMissionFromApi } from '../redux/missions/missions';
import Missions from './Missions';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (!missions.missions[0]) {
      dispatch(getMissionFromApi());
    }
  }, []);
  return (
    <div className="missions">
      <table className="miss-table">
        <thead>
          <tr>
            <td className=" col-head">Mission</td>
            <td className=" col-head">Description</td>
            <td className=" col-head">Status</td>
            <td className=" col-head">Join</td>
          </tr>
        </thead>
        <tbody>
          {missions.missions.map((mission) => (
            <Missions key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
