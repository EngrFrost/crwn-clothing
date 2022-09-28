import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.category;
export const selectCategoriesMap = (state) => {
  console.log('selector fire');

  return state?.category?.categoriesMap?.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isloading,
);
