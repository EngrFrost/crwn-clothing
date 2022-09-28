import { CATEGORY_ACTION } from './categoryType';

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: [],
  isloading: false,
  error: null,
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CATEGORY_ACTION.FETCH_CATEGORIES_START:
      return { ...state, isloading: true };
    case CATEGORY_ACTION.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isloading: false, categoriesMap: action.payload };
    case CATEGORY_ACTION.FETCH_CATEGORIES_FAILED:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};
