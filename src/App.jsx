// import

import Frag_Clickable from "./components/reusable/Frag_Clickable";

function App() {

  function dis()
  {
    console.log("GGG");
  }

  return (
    <div className="App">
      <div style={{position: "fixed", top: "100px", backgroundColor: "blue", width: "70px", height: "70px"}}>
        <Frag_Clickable dispatch={dis}/>
      </div>
    </div>
  );
}

export default App;
