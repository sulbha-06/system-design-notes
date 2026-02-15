import React, { useEffect } from "react";
import Cards from "./Cards";
import "./cards.css";
import ShimmerCards from "./ShimmerCards";
function MemeContainer() {
  const [memeList, setMemeList] = React.useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeList(data.data.memes))
      .catch((error) => console.error("Error fetching memes:", error));
    console.log("MemeContainer mounted");
  }, []);
  return (
    <>
      {" "}
      <h1>Meme Container</h1>
      <p>This is a meme container component.</p>
      <div className="meme-container">
        {memeList.length ? (
          memeList.map((meme) => <Cards key={meme.id} meme={meme} />)
        ) : (
          <ShimmerCards />
        )}
      </div>
    </>
  );
}

export default MemeContainer;
