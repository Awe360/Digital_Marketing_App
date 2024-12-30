import React from 'react'
import Hero from './Hero'
import Category from './Category'
import AllProducts from './AllProducts'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="">
    <div><Hero/></div>
    <div className="">
      <Category/>
      <AllProducts/>
      
    </div>
    </div>
  )
}

export default Home