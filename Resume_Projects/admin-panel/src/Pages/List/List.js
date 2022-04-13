import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import './list.scss';
import DataTable from "../../Components/Datatable/DataTable";

const List = ({addNew}) => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable addNew={addNew}/>
      </div>
    </div>
  )
}

export default List