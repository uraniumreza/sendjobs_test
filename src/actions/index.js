import { action_types } from '../constants/action_types';

export const actions = {
  addJob: (job) => {
    return {
      type: action_types.ADD_JOB,
      payload: job,
    };
  },
};
