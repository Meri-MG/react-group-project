import React from 'react';
import { useDispatch } from 'react-redux';
import { createJoin } from '../../redux/missions/missions';
import MissionBtn from './missionbtn';

const Missions = (props) => {
  const prop = props;
  const dispatch = useDispatch();
  const { join } = prop.mission;
  const handleJoin = () => {
    const toggleJoin = !join;
    const setJoin = (() => ({ ...prop.mission, join: toggleJoin }));
    dispatch(createJoin(setJoin()));
  };
  return (
    <tr>
      <td className="first-col">{prop.mission.mission_name}</td>
      <td className="second-col">{prop.mission.description}</td>
      <td className="third-col">
        <p className={join ? 'member' : 'not-member'}>{join ? 'Active Member' : 'Not a Member'}</p>
      </td>
      <td className="fourth-col">
        <MissionBtn handleJoin={handleJoin} join={!join} />
      </td>
    </tr>
  );
};

export default Missions;
