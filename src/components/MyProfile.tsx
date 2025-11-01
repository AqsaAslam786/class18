const ParentComponent = () => {
    function handleClick(value: number){
        console.log("ParentComponent clicked with value", value);
    }
}
  return (
    <div>
      <h1>ParentComponent</h1>
      <ChildComponent title="ChildComponent" ChildClickEvent={handleClick}/>
    </div>
  )
}

export default ParentComponent
