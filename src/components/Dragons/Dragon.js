import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import store from '../../redux/configureStore';
import classes from './Dragons.module.css';

const getDataFromApi = 'getDataFromApi';
function Dragon() {
  const dragons = useSelector((state) => state.dragonReducer);
  useEffect(
    () => {
      store.dispatch({ type: getDataFromApi });
    }, [],
  );
  return (
    <div>
      <ul className={classes.ul}>
        {dragons.map((el) => (
          <li key={el.id}>
            <span>
              {el.flickr_images.map((img) => <img key={uuidv4()} src={img} alt={el.name} />)}
            </span>
            <span>
              {el.description}
            </span>
            <span>
              {el.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dragon;
