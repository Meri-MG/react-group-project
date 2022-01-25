import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Missions from "./Mission";
import { getMissionFromApi } from '../redux/actions/rocket';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);
  console.log(missions.missions, 'this me searching');
  useEffect(() => {
    dispatch(getMissionFromApi());
  }, []);
  return (
    <div className="title">
      {missions.missions.map((mission) => (
        <Missions
          key={mission.id}
          mission={mission}
        />
      ))}
    </div>
  );
};

export default MissionList;