import {FOOD_LIST_ERROR, FOOD_LIST_SUCCESS} from './action_types';

import axios from 'axios';
export const getFoodList = data => {
  return {
    type: FOOD_LIST_SUCCESS,
    payload: data,
  };
};

export const getFoodListDataError = error => {
  return {
    type: FOOD_LIST_ERROR,
    payload: error,
  };
};

export const getFoodListData = () => {
  return dispatch => {
    axios
      .get(`https://api.jsonbin.io/b/5fce7e1e2946d2126fff85f0`)
      .then(({data}) => {
        console.log('@@@@@data', data);
        dispatch(getFoodList(data));
      })
      .catch(err => {
        dispatch(getFoodListDataError(err));
      });
  };
};
