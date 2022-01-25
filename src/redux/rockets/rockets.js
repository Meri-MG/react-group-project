const GET_ROCKETS = 'Rockets/GET_ROCKETS';
const GET_RESERVED = 'Rockets/GET_RESERVED';
const initialState = [];
const baseURLRockets = 'https://api.spacexdata.com/v3/rockets';
export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const getReserved = (payload) => ({
  type: GET_RESERVED,
  payload,
});

export const getRocketsFromAPI = () => async (dispatch) => {
  const request = await fetch(baseURLRockets);
  const response = await request.json();
  dispatch(getRockets(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    case GET_RESERVED: {
      return state.map((rocket) => {
        if (rocket.id === action.payload.btnId) {
          return { ...rocket, reserve: action.payload.reserve };
        }
        return rocket;
      });
    }
    default:
      return state;
  }
};

export default reducer;
