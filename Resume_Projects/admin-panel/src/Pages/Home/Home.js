import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";
import Table from "../../Components/Table/Table";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
