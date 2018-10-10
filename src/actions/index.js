import { action_types } from '../constants/action_types';

export const actions = {
  addJob: (job) => {
    return {
      type: action_types.ADD_JOBS,
      payload: job,
    };
  },
  addCategory: (category) => {
    return {
      type: action_types.ADD_CATEGORIES,
      payload: category,
    };
  },
};
