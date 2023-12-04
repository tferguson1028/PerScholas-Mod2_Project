function PlaySound() {
  async function playSound(url)
  {
    let sound = new Audio(url);
    audio.type = 'audio/wav';

    try 
    {
      await sound.play();
      console.log('Playing...');
    } catch (err) 
    {
      console.log('Failed to play...\n' + err);
    }
  }

  // This causes an error since it's being played before the users interacts with the page.
  playSound("https://cdn.freesound.org/previews/506/506545_6142149-lq.ogg");

  return (
    <div>
      { /* This will not cause an error because the user interacts with the page before the sound plays */ }
      <button onClick={playSound}></button>
    </div>
  );
}

export default PlaySound;
