import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  // const [currentEmojiState, setEmojiState] = // setEmojiState
  //   useState(); 
  
    const [emojiArray, setEmojiState] = // setEmojiState
    useState<string[]>([]) ;


  const handleEmojiChange = (emoji:string) => setEmojiState([...emojiArray,emoji]);
  
  function restrictList (emojiArray : string[]){
    if(emojiArray.length > 5){
      emojiArray.shift()
    }
    return emojiArray
  }

  restrictList(emojiArray)
  
  // const handleClock = () => {
  //   const newState = '⏰'
     
  //   setEmojiState([...emojiArray,newState]);
  // };

  // const handleFryingPan = () => {
  //   const newState = '🍳' 
  //   setEmojiState([...emojiArray,newState]);
  // };
  // const handlePlate = () => {
  //   const newState = '🍽️' 
  //   setEmojiState([...emojiArray,newState]);


  // const handleStoreCurrentCount = () => {
  //   queFavouriteEmojiWithClickedEmoji(emojiArray);
  // };
 const emArray = ['🍽️','⏰','🍳','😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓' ,'😩', '😫']

  console.log(emojiArray)
  return (
    <>
      <h1>Emoji Picker</h1>
      <p>Your former Emojis: {emojiArray}</p>
      <p>Current Emoji: {emojiArray[emojiArray.length -1]}</p>
      {/* <button onClick={() => handleEmojiChange('🍳')}>🍳</button>
      <button onClick={() => handleEmojiChange('⏰')}>⏰</button>
      <button onClick={() => handleEmojiChange('🍽️')}>🍽️</button> */}
      {emArray.map((emoji => 
        <button key = '' onClick={() => handleEmojiChange(emoji)}>{emoji}</button>
      ))
}
      {/* <button onClick={handlePlate}>🍽️</button>
      <button onClick={handleClock}>⏰</button> */}
      <hr />
      {/* <button onClick={handleStoreCurrentCount}>Store current count</button> */}
    </>
  );
}
