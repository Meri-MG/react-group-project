const getDataFromApi = 'getDataFromApi';
const fetchData = 'rocketStore/rockets/fetchDragon';
const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchData:
      return [...action.payload.map((element) => ({
        id: element.id,
        name: action.payload.name,
        type: element.type,
        flickr_images: element.flickr_images,
        description: element.description,
      }))];
    default:
      return state;
  }
};

export default reducer;
