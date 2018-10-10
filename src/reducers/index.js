import { action_types } from '../constants/action_types';

const initialState = {
  jobs: Array(0),
  categories: Array(0),
};

const reducer = (state = initialState, action) => {
  const { jobs, categories } = state;
  const { type, payload } = action;

  switch (type) {
    case action_types.ADD_JOBS: {
      return {
        ...state,
        jobs: [...jobs, payload],
      };
    }
    case action_types.ADD_CATEGORIES: {
      if (!categories.includes(payload))
        return {
          ...state,
          categories: [...categories, payload],
        };
    }
  }

  return state;
};

export default reducer;
