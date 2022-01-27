import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import store from '../../redux/configureStore';
import Reserve from './Reserve';
import classes from './Dragons.module.css';
import { reserveDragon } from '../../redux/dragons/dragons';

const getDataFromApi = 'getDataFromApi';
function Dragon() {
  const dragons = useSelector((state) => state.dragonReducer);
  useEffect(
    () => {
      store.dispatch({ type: getDataFromApi });
    }, [],
  );
  const reserveHandler = (el) => {
    store.dispatch(reserveDragon(el));
  };
  return (
    <div>
      <ul className={classes.ul}>
        {dragons.map((el) => (
          <li key={el.id}>
            <span>
              {el.flickr_images.map((img) => <img key={uuidv4()} src={img} alt={el.name} />)}
            </span>
            {el.reserved ? <span className={classes.badge}>Reserved</span> : ''}
            <span>
              {el.description}
            </span>
            <span>
              {el.name}
            </span>
            <span><Reserve reserveHandler={() => reserveHandler(el)} content={el.reserved ? 'Cancel reservation' : 'Reserve dragon'} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dragon;
