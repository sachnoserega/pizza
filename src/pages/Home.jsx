import React from "react";
import { useState, useEffect } from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'
import Skeleton from '../components/PizzaBlock/Skeleton'

const Home = () => {

  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://637878fd0992902a251be74b.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setLoading(false)
      })
    // Возвращает страницу при переходе с другой в верхнее положение
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
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