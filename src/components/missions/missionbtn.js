import PropTypes from 'prop-types';

function MissionBtn({
  handleJoin,
  join,
}) {
  return (
    <button onClick={handleJoin} type="button" className={!join ? 'join' : 'leave'}>{!join ? 'Leave Mission' : 'Join Mission'}</button>
  );
}

MissionBtn.propTypes = {
  handleJoin: PropTypes.func.isRequired,
  join: PropTypes.bool.isRequired,
};
export default MissionBtn;
