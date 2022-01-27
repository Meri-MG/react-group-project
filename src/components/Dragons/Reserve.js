import PropTypes from 'prop-types';
import classes from './Reserve.module.css';

function Reserve({ reserveHandler, content }) {
  return (<button className={classes.button} onClick={reserveHandler} type="button">{content}</button>);
}

Reserve.propTypes = {
  reserveHandler: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};
export default Reserve;
