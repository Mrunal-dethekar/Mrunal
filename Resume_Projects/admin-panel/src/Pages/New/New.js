import './new.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
      <Navbar/>
      test
      </div>
    </div>
  )
}

export default New