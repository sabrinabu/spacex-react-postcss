import React from 'react'
import "./home.css";
import Search from '../../components/search/Search';

export default function Home() {
  return (
    <div className='home' >
      <div className='home-container'>
        <div className='home-container-search'>
           <Search/>
        </div>
        <div className='home-container-status'></div>
        <div className='home-container-pastlaunches'></div>
      </div>
    </div>
  )
}
