export const GET_CATEGORY = 'Capinterest/Categories/FetchCategories';
export const CATEGORY_DETAILS = 'Capinterest/Categories/FetchCategoriesDetails';
export const INTRO_IMAGES = 'Capinterest/Categories/FetchIntroImages';
const fetchUrl = (category) => `https://pixabay.com/api/?key=24917137-792399e847d624ca8b061565d&category=${category}&per_page=12&pretty=true`;

export default fetchUrl;
