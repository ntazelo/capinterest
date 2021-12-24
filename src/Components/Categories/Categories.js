import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import fetchAll from '../../Redux/Action/Category';
import Category from './Category/Category';
import './Categories.css';

const Categories = () => {
  const data = useSelector((state) => state.CategoryReducer);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchAll());
    }
    console.log('useEffect');
    setCategory(data);
  }, [data]);
  const filterHandler = (key) => {
    if (key === 'category') {
      console.log(data);
      setCategory(data);
    } else {
      const filtered = data.filter((cat) => cat.category === key);
      console.log(filtered);
      setCategory(filtered);
    }
  };

  return (

    <>
      <Category Onfilter={filterHandler} />

      <section className="categories-cont">
        {category.map((category, i) => (
          <div className={`img-gal-wrapper-${i + 1} position-rel`} key={category.id}>
            <figure className="img-wrapper">
              <img className="img category-img" src={category.image} alt={category.category} />
            </figure>
            <a href={`/${category.category}`} className="detail-link">
              <i className="fas fa-arrow-circle-right" />
            </a>
            <div className="category-info-cont">
              <h2 className="category-title">{category.category}</h2>
              <span className="category-image-count">
                {category.count}
                {' '}
                pictures
              </span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Categories;
