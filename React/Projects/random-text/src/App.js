import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  return (
<section className='section-center'>
<h3>Tired of boring Lorem Lipsum ?</h3>
<form>
  <label htmlFor='amount'>Paragraph</label>
  <input type="number" name='amount' min={0} max={10} value={count} onChange={(e)=>setCount(e.target.value)}></input>
</form>
</section>
  );
}

export default App;
