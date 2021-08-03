import { useState } from "react";

const GeneratedOutput = () => {
  const watchList = ["NOS4A2", "The Simpsons", "Blade", "Darkest Hour", "Miss Congeniality", "Saw"]
  const [item, setItem] = useState('No title selected.');

  const generateSelection = (array) => {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    setItem(randomItem);
  }

  return(
    <div className="center">
      <button onClick={() => generateSelection(watchList)}>
        Get Title
      </button>
      <p>{item}</p>
    </div>
  );
}

export default GeneratedOutput;
