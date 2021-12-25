import fetchUrl, { INTRO_IMAGES } from './ActionType';

const fetchIntroImage = () => async (dispatch) => {
  const music = (await fetch(fetchUrl('music'))).json();
  const sports = (await fetch(fetchUrl('sports'))).json();
  const food = (await fetch(fetchUrl('food'))).json();
  const animals = (await fetch(fetchUrl('animals'))).json();
  const computer = (await fetch(fetchUrl('computer'))).json();
  const Categories = ['music', 'sports', 'food', 'animals', 'computer'];

  const Cat = await Promise.all([music, sports, food, animals, computer]);

  const payload = Cat.map((category, i) => ({
    category: Categories[i],
    count: category.hits.length,
    image: category.hits[6].largeImageURL,
    id: category.hits[6].id,
  }));

  dispatch({
    type: INTRO_IMAGES,
    payload,
  });
};

export default fetchIntroImage;
