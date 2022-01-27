import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import store from '../../redux/configureStore';
import Reserve from './Reserve';
import classes from './Dragons.module.css';
import styles from './Reserve.module.css';
import { reserveDragon } from '../../redux/dragons/dragons';

const getDataFromApi = 'getDataFromApi';
function Dragon() {
  const [reserveStyle, setReserveStyle] = useState(true);
  const dragons = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    store.dispatch({ type: getDataFromApi });
  }, []);
  const reserveHandler = (el) => {
    setReserveStyle(false);
    store.dispatch(reserveDragon(el));
  };
  return (
    <div>
      <ul className={classes.ul}>
        {dragons.map((el) => (
          <li key={el.id}>
            <span className={classes.alignText}>
              <img key={uuidv4()} src={el.flickr_images[0]} alt={el.name} />
              <span>
                <h2>{el.name}</h2>

                <p>
                  {el.reserved ? (
                    <span className={classes.badge}>Reserved</span>
                  ) : (
                    ''
                  )}
                  {el.description}
                </p>

                <div>
                  <Reserve
                    styleing={
                      reserveStyle ? styles.button : styles.buttonCancel
                    }
                    reserveHandler={() => reserveHandler(el)}
                    content={
                      el.reserved ? 'Cancel reservation' : 'Reserve dragon'
                    }
                  />
                </div>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dragon;
