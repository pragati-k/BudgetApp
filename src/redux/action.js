import {ADD_BUDGET} from './constants';

export function addBudget(item) {
  return {
    type: ADD_BUDGET,
    payload: item,
  };
}
