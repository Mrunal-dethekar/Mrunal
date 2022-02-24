import "./App.css";
import Hello from "./component/HelloWorld";
import HelloClass from "./component/HelloClass";

function App() {
  return (
    <>
      <Hello heading="India" heading2="MH" />
      <Hello heading="Africa" />
      <Hello heading="USA" />
      <HelloClass/>
    </>
  );
}

export default App;
