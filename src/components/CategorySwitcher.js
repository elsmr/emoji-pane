import React from 'react';

const CategorySwitcher = ({ categories, recentsEnabled }) => (
  <div>
    <ul className="category-switcher">
      { recentsEnabled &&
        <li key="recents">
          <a title="Recents" className="category-switcher__item" href="#recents">🕓</a>
        </li>
      }
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
  recentsEnabled: React.PropTypes.bool.isRequired,
};

export default CategorySwitcher;
