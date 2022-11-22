import React from 'react';
import { useState } from 'react';


function Categories() {

  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  
  return (
    <div className="categories">
      <ul>

        {categories.map((item, i) => (
          <li onClick={() => setActiveIndex(i)}  key={i} className={activeIndex === i ? "active" : ''}>{item}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default Categories;
