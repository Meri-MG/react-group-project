import React from 'react';

const Missions = (props) => {
  const prop = props;
  return (
    <div>
      <h1>{prop.mission.mission_name}</h1>
      <p>{prop.mission.description}</p>
    </div>
  );
};

export default Missions;
