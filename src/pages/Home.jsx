import React from "react";
import { useState, useEffect } from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {

  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [chengeCategory, setChengeCategory] = useState(0)
  const [sortType, setSortType] = useState(
    { name: 'популярности', sortProperty: 'rating' }
  )

  useEffect(() => {
    setLoading(true)
    //  Для сортировки только по category
    // fetch('https://637878fd0992902a251be74b.mockapi.io/items?category=' + chengeCategory)

    // Для сортировки только category and sort
    fetch(`https://637878fd0992902a251be74b.mockapi.io/items?${
      chengeCategory > 0 ? `category=${chengeCategory}` : ''
      }&sortBy=${sortType.sortProperty}&order=desc ,`
    )
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setLoading(false)
      })
    // Возвращает страницу при переходе с другой в верхнее положение
    window.scrollTo(0, 0)
  }, [chengeCategory, sortType])

  console.log(chengeCategory, sortType)

  return (
    <>
      <div className="content__top">
        <Categories
          value={chengeCategory}
          onClickCategory={(i) => setChengeCategory(i)} />
        <Sort
          value={sortType}
          onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => < PizzaBlock {...obj} key={obj.id} />)}
      </div>
    </>
  );
}

export default Home;