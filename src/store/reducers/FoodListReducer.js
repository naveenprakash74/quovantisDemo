import {FOOD_LIST_SUCCESS, FOOD_LIST_ERROR} from '../actions/action_types';
const initialState = {listData: [], error: null};

export const foodListReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FOOD_LIST_SUCCESS:
      return {...state, listData: action.payload};
    case FOOD_LIST_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
