import React from 'react';

function Categories({ value, onClickCategory }) {

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>

        {categories.map((item, i) => (
          <li onClick={() => onClickCategory(i)}  key={i} className={value === i ? "active" : ''}>{item}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default Categories;
