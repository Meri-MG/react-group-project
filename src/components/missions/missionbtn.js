function MissionBtn ({
  handleJoin,
  join,
})  {

  return (
  <button onClick={handleJoin} type="button" className={join ? 'join' : 'leave'}>{join ? 'Leave Mission' : 'Join Mission'}</button>
)}

export default MissionBtn