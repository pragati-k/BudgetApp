import {ADD_BUDGET} from './constants';

const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.payload];

    default:
      return state;
  }
};
