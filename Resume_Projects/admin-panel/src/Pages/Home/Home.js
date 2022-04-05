import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './home.scss';


const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="home-container">Container</div>
    </div>
  )
}

export default Home