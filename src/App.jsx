import Count from './counter';
import Users from './Users';
import Friends from './Friends'
import CountTable from './praCount';
import './App.css'

function App() {
  function handleClick(){
    alert('button clicked 1')
  }
  const handleClick2 = () =>{
    alert('arrow function btn clicked 2');
  }
  const handleClick4 = (num) =>{
    alert(num+5);
  }
  return (
    <>
      <h3>React Core Concept day-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Count ></Count>
      <CountTable></CountTable>
      <button onClick={handleClick}>Button Clicked 1</button>
      <button onClick={handleClick2}>Button Clicked 2</button>
      <button onClick={()=>alert('btn clicked 3')}>Button Clicked 3</button>
      <button onClick={ ()=>handleClick4(120)}>Button Clicked 4</button>
    </>
  )
}

export default App
