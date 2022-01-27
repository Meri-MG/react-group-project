import PropTypes from 'prop-types';

function Reserve({ reserveHandler, content, styling }) {
  return (
    <button className={styling} onClick={reserveHandler} type="button">
      {content}
    </button>
  );
}

Reserve.propTypes = {
  reserveHandler: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
};
export default Reserve;
