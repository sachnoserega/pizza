import React from "react";
import { useState, useEffect } from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock/index'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {

  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [chengeCategory, setChengeCategory] = useState(0)
  //  Стейт для пагинации
  const [currentPage, setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState(
    { name: 'популярности', sortProperty: 'rating' }
  )

  useEffect(() => {
    setLoading(true)
    const category = chengeCategory > 0 ? `category=${chengeCategory}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''
    //  Для сортировки только по category
    // fetch('https://637878fd0992902a251be74b.mockapi.io/items?category=' + chengeCategory)

    // Для сортировки category and sort and input
    // fetch(`https://637878fd0992902a251be74b.mockapi.io/items?${chengeCategory > 0 ? `category=${chengeCategory}` : ''
    //   }${searchValue ? `&search=${searchValue}` : ''}&sortBy=${sortType.sortProperty}&order=desc ,`
    // )
    fetch(`https://637878fd0992902a251be74b.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortType.sortProperty}${search}&order=desc`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setLoading(false)
      })
    // Возвращает страницу при переходе с другой в верхнее положение
    window.scrollTo(0, 0)
  }, [searchValue, chengeCategory, sortType, currentPage])

  const pizzas = items
    //  Кусок кода для реализации поиска через input при помощи JS

    // .filter((obj) => {
    //   if (obj.name.includes(searchValue.toLowerCase())) {
    //     return true
    //   }
    //   return false
    // })
    .map((obj) => < PizzaBlock {...obj} key={obj.id} />)

  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

  return (
    <div>
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
        {isLoading ? skeletons : pizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

export default Home;