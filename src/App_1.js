import './App.css';

function App() {

  // const items = [1, 2, 3, 4, 5];
  const heading = ["column1", "column2", "column3", "column4", "column5", "column6"];
  const tableData = [
    { "column1": 1, "column2": 2, "column3": 3, "column4": 4, "column5": 5, "column6": 6 },
    { "column1": 7, "column2": 8, "column3": 9, "column4": 10, "column5": 11, "column6": 12 }
  ];

  // function renderData(item, index) {
  //   return (
  //     <div key={index} style={{ display: 'flex' }}>
  //       <input className="checkbox" type="checkbox" key={index} name={item} value={item} />
  //       <label for={item}>{item}</label>
  //     </div>
  //   )
  // }

  function renderHeading(item, index) {
    console.log("render heading", item, index);
    return (
      <td id="row" key={index}>
        <th>{heading[index]}</th>
        {tableData.map(function (ele, idx) {
          console.log("ele", ele);
          return (
            <tr key={idx}>
        <input className="checkbox" type="checkbox" name={item} value={item} />
              <td>{ele[item]}</td>
            </tr>
          )
        })}
      </td>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{'Some Heading'}</h1>
        <div className="buttonHeader">
          <button className="btn">{'Start'}</button>
          <button className="btn">{'Stop'}</button>
          <button className="btn">{'Launch VM'}</button>
        </div>
      </header>
      {/* <div className="multiSelectPanel">
        {items.map(renderData)}
      </div> */}
      <table>
        {heading.map(renderHeading)}
      </table>
    </div>
  );
}

export default App;
