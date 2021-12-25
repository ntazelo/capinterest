import { useState } from 'react';

import './Category.css';

const Category = (props) => {
  const [category, setCategory] = useState('');
  const { Onfilter } = { ...props };
  const getCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const fetchCategory = (e) => {
    e.preventDefault();
    Onfilter(category);
  };

  return (
    <section className="filter-cont">
      <p className="indic-sect">
        filter by category
      </p>
      <form className="form-control" onSubmit={fetchCategory}>
        <select name="category" className="category-input" value={category} onChange={getCategoryHandler} required>
          <option value="category">Category</option>
          <option value="sports">sports</option>
          <option value="computer">computer</option>
          <option value="music">music</option>
          <option value="food">food</option>
          <option value="animals">animals</option>
          <option value="fashion">fashion</option>
        </select>
        <button type="submit" className="btn-book">Category</button>
      </form>
    </section>
  );
};

export default Category;
