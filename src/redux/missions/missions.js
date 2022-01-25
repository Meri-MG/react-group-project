const FETCH_MISSIONS = 'FETCH_MISSIONS';
const CREATE_JOIN = 'CREATE_JOIN';
const missionUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const getMission = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const createJoin = (payload) => ({
  type: CREATE_JOIN,
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
      return { ...state, missions: action.payload };
    case CREATE_JOIN: {
      const changeJoin = state.missions.map((el) => {
        if (el.mission_id === action.payload.mission_id) {
          return { ...el, join: action.payload.join };
        }
        return el;
      });
      return { ...state, missions: changeJoin };
    }
    default:
      return state;
  }
};

export default reducer;
