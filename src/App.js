import './App.css';

function App() {
  let arr = [
    ["✔", "Single User"],
    ["✔", "50GB Storage"],
    ["✔", "Unlimited Public Projects"],
    ["✔", "Community Access"],
  ];
  let duparr = [
    ["✖", "Unlimited Private Objects"],
    ["✖", "Dedicated Phone Support"],
    ["✖", "Free Subdomain"],
    ["✖", "Monthly Status Reports"],
  ];
  let arr2 = [
    ["✔", "Unlimited Users"],
    ["✔", "50GB Storage"],
    ["✔", "Unlimited Public Projects"],
    ["✔", "Community Access"],
    ["✔", "Unlimited Private Objects"],
    ["✔", "Dedicated Phone Support"],
    ["✔", "Free Subdomain"],
    ["✔", "Monthly Status Reports"],
  ];
  let arr1 = [
    ["✔", "5 Users"],
    ["✔", "50GB Storage"],
    ["✔", "Unlimited Public Projects"],
    ["✔", "Community Access"],
    ["✔", "Unlimited Private Objects"],
    ["✔", "Dedicated Phone Support"],
    ["✔", "Free Subdomain"],
  ];
  let duparr2 = [["✖", "Monthly Status Reports"]];
  return (
    <div className="App">
     <div className="div1">
        <div className="demo">
          <Template topHead="FREE" titHead="$0/month" />
        </div>
        {arr.map((val) => {
          return <Template symbol={val[0]} info={val[1]} />;
        })}
        <div className="into">
          {duparr.map((val) => {
            return <Template symbol={val[0]} info={val[1]} />;
          })}
        </div>
        <div className="into">
          <Button button="Button" />
        </div>
      </div>

      <div className="div2">
        <div className="demo">
          {" "}
          <Template topHead="PLUS" titHead="$9/month" />
        </div>
        {arr1.map((val) => {
          return <Template symbol={val[0]} info={val[1]} />;
        })}
        <div className="into">
          {duparr2.map((val) => {
            return <Template symbol={val[0]} info={val[1]} />;
          })}
        </div>
        <div className="into">
          <Button button="Button" />
        </div>
      </div>
      <div className="div3">
        <div className="demo">
          <Template topHead="PRO" titHead="$49/month" />{" "}
        </div>
        {arr2.map((val) => {
          return <Template symbol={val[0]} info={val[1]} />;
        })}
        <div className="clsbut ">
          <Button button="Button" />
        </div>
      </div>
    </div>
  );
}
function Template(props) {
  return (
    <div id="container">
      <div className="headCont">
        <p>{props.topHead}</p>
        <h1>{props.titHead}</h1>
      </div>
      <div className="contents">
        <p className="cont">{props.symbol}</p>
        <h5 className="cont">{props.info}</h5>
      </div>
      {/* <div className="button">
        <button>{props.button}</button>
      </div> */}
    </div>
  );
}
function Button({ button }) {
  return (
    <div>
      <button className="but">{button}</button>
    </div>
  );
}








export default App;
