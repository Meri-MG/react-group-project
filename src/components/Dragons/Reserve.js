import PropTypes from 'prop-types';

function Reserve({ reserveHandler, content }) {
  return (<button onClick={reserveHandler} type="button">{content}</button>);
}

Reserve.propTypes = {
  reserveHandler: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
export default Reserve;
