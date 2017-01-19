import React from 'react';
import '../css/categorySwitcher.css';

const CategorySwitcher = ({ categories }) => (
  <div>
    <ul className="category-switcher">
      {
        categories
          .map(cat => (
            <li key={cat.name}>
              <a title={cat.desc} className="category-switcher__item" href={`#${cat.name}`}>{cat.icon}</a>
            </li>
          ))
      }
    </ul>
  </div>
);

CategorySwitcher.propTypes = {
  categories: React.PropTypes.array.isRequired,
};

export default CategorySwitcher;
