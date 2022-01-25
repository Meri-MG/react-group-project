const FETCH_MISSIONS = 'FETCH_MISSIONS';
const missionUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const getMission = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const getMissionFromApi = () => async (dispatch) => {
  const request = await fetch(missionUrl);
  const response = await request.json();

  dispatch(getMission(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
