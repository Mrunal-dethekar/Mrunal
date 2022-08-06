import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';

function App() {
  const array = [4, 5 , 7, 9, 10, 11 , 13,15,16,17,18,21]
var str ="";

for(let i=0;i<array.length;i++){
  let count = 0;
  let tempI = i;
  while((array[tempI]+1) ==array[tempI+1]){
    count++;
    tempI++;
  }

  if(count>1){
    str += array[i];
    str += "-"
    str += array[count+i];
  }else{
    str += array[i];
  }
  i=i+count;
  str += " ,";
}

console.log(str)
  return (
    <div className="App">
      {/* <Component1 />
      <Component2 /> */}
    </div>
  );
}

export default App;
