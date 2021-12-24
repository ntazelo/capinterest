import { useState } from 'react';

import './Category.css';

const Category = () => {
  const [category, setCategory] = useState('');
  const getCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const fetchCategory = (e) => {
    e.preventDefault();
    console.log(category);
  };

  return (
    <section className="filter-cont">
      <p className="indic-sect">
        filter by category
      </p>
      <form className="form-control" onSubmit={fetchCategory}>
        <select name="category" className="category-input" value={category} onChange={getCategoryHandler} required>
          <option value="">Category</option>
          <option value="sport">sports</option>
          <option value="thriller">computer</option>
          <option value="romance">music</option>
          <option value="action">food</option>
          <option value="horror">animals</option>
          <option value="horror"> fashion</option>
        </select>
        <button type="submit" className="btn-book">Add book</button>
      </form>
    </section>
  );
};

export default Category;
