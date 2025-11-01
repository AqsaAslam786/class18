interface CounterListProps{
    Result:number,
    Value:string,
    Count:number;


}

const CounterList = ({Result, Count, Value}: CounterListProps) => {
  return (
    <div className="bg-purple-200 w-220 h-100  border border-amber-300 rounded-2xl">
      <p>{Result}</p>
      <div className="bg-teal-100 w-40 h-40 rounded-2xl">{Count}<br/><button className="bg-yellow-100 border border-black mt-20">{Value}</button></div>
    </div>
  )
}

export default CounterList
