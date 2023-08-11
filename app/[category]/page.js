import React from 'react';
import Category from "../../components/categoryPage/CategoryPage";

const CategoryPage = ({params}) => {

  const { category } = params;

  return (
    <Category category={category} />
  )
}

export default CategoryPage;