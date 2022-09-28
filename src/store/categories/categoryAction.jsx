import { async } from '@firebase/util';
import { getCategiruesAndDocuments } from '../../utils/firebase.utils';
import { createAction } from '../../utils/reducer.utils';
import { CATEGORY_ACTION } from './categoryType';

export const setCategoriesMap = (categoryMap) => createAction(CATEGORY_ACTION.SET_CATEGORY_MAP, categoryMap);

export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesarray) =>
  createAction(CATEGORY_ACTION.FETCH_CATEGORIES_SUCCESS, categoriesarray);

export const fetchCategoriesFailed = (error) => createAction(CATEGORY_ACTION.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoryMap = await getCategiruesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
