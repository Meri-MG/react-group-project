const getDataFromApi = 'getDataFromApi';
const fetchData = 'rocketStore/rockets/fetchDragon';
const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];
const reserve = 'rocketStore/rockets/reserve';
export const getDragon = (payload) => (
  {
    type: fetchData,
    payload,

  }
);

export const fetchDragonMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === getDataFromApi) {
    fetch(url).then((data) => data.json()).then((json) => storeAPI.dispatch(getDragon(json)));
  }
  return next(action);
};

export const reserveDragon = (payload) => (
  {
    type: reserve,
    payload,
  }
);

let flag = true;
const reducer = (state = initialState, action) => {
  const ids = state.length ? state.map((el) => el.id) : [];
  switch (action.type) {
    case fetchData:
      if (!action.payload.some((el) => ids.includes(el.id))) {
        flag = true;
      }
      if (flag) {
        flag = false;
        return [...action.payload.map((element) => ({
          id: element.id,
          name: element.name,
          type: element.type,
          flickr_images: element.flickr_images,
          description: element.description,
          reserved: false,
        }))];
      }
      return state;
    case reserve:
      return [...state.map((dragon) => {
        if (dragon.id !== action.payload.id) {
          return dragon;
        }
        return { ...dragon, reserved: !dragon.reserved };
      })];
    default:
      return state;
  }
};

export default reducer;
