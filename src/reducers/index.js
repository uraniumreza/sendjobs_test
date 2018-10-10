import { action_types } from '../constants/action_types';

const initialState = {
  jobs: {},
};

const reducer = (state = initialState, action) => {
  const { jobs } = state;
  const { type, payload } = action;

  switch (type) {
    case action_types.ADD_JOB: {
      if (!jobs[`${payload.category}`]) {
        jobs[`${payload.category}`] = Array();
      }
      jobs[`${payload.category}`] = [...jobs[`${payload.category}`], payload];
      return {
        ...state,
        jobs: { ...jobs },
      };
    }
  }

  return state;
};

export default reducer;
