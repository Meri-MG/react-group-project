import PropTypes from 'prop-types';

function Reserve({ reserveHandler, content, styleing }) {
  return (
    <button className={styleing} onClick={reserveHandler} type="button">
      {content}
    </button>
  );
}

Reserve.propTypes = {
  reserveHandler: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  styleing: PropTypes.string.isRequired,
};
export default Reserve;
