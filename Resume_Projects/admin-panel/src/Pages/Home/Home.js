import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widget/Widget';
import './home.scss';



const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="home-container">
        <Navbar/>
        <div className="widgets">
          <Widget/>
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Home