import { useState } from "react";
import { useEmojiContext } from "./EmojiContext";

function Emoji() {
  const { currentEmoji, handleUpdateEmoji } = useEmojiContext();
  return (
    <>
      <div className="emoji">{currentEmoji}</div>
      <button onClick={() => handleUpdateEmoji("🔥")}>Update Emoji</button>
    </>
  );
}
export default Emoji;
