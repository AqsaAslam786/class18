
import './App.css'
import CounterList from './components/CounterList'
export type ProfileCard = {

   Result:number,
    Value:string,
    Count:number;
  

function App() {
const card1:ProfileCard ={
    Resul={0},
    Value:"On the 25th",
    count:{0}
  }
  return (
    <>
        <CounterList  
        Result={card1.Result} 
        Value={card1.Value} 
        Count={card1.Count}/>
    </>
  )
}

export default App
