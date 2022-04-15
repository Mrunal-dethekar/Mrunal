import {useState} from "react";


function App() {

  let [data,setdata] = useState([])
  let [user, setUser] = useState([{
    "id": 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496",
      }
    }}]);
  const API = "https://jsonplaceholder.typicode.com/users"

  let fetchAPI = async () =>{
    let res = await fetch(API);
    let Fetchdata = await res.json();
    setdata(Fetchdata)
  }

  let myfunc = (id)=>{
    let abc = data.filter((e)=> id==e.id)
    setUser(abc)
    console.log(user)
  }

  return (
    <div className="App">
    <div className="left">
  <button onClick={fetchAPI} >Fetch</button>
    {data.map((data)=>(
      <p onMouseOver={()=>myfunc(data.id)}>{data.email}</p>
    ))}
  </div>
  <div className="right">
    <h1>USERDETAILS</h1>
    <p>Name : {user[0].name}</p>
    <p>Email : {user[0].email}</p>
    <p>Username : {user[0].username}</p>
  </div>
    </div>
  );
}

export default App;
