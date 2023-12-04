// import

import Frag_Clickable from "./components/reusable/Frag_Clickable";

function App() {

  function dis()
  {
    console.log("GGG");
  }

  async function playSound(url)
  {
    let sound = new Audio(url);
    let sound2 = new Audio("https://cdn.freesound.org/previews/506/506545_6142149-lq.ogg");
    let audio = new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav');  
    audio.type = 'audio/wav';

    try 
    {
      // await sound.play();
      await sound2.play();
      // await audio.play();
      console.log('Playing...');
    } catch (err) 
    {
      console.log('Failed to play...' + err);
    }
  }

  playSound("https://cdn.freesound.org/previews/506/506545_6142149-lq.ogg");

  return (
    <div className="App">
      <button onClick={playSound}></button>
    </div>
  );
}

export default App;
