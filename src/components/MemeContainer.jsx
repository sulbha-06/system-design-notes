import React, { useEffect } from "react";
import Cards from "./Cards";
import "./cards.css";
import ShimmerCards from "./ShimmerCards";
function MemeContainer() {
  const [memeList, setMemeList] = React.useState([]);
  const [showShimmer, setshowShimmer] = React.useState(true);
  const fetchMemes = async () => {
    try {
      setshowShimmer(true);
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemeList((memeList) => [...memeList, ...data.data.memes]);
      setshowShimmer(false);
    } catch (error) {
      console.error("Error fetching memes:", error);
    }
  };
  useEffect(() => {
    fetchMemes();
    console.log("MemeContainer mounted");

    //infinite scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      console.log("Reached bottom of the page, fetching more memes...");
      fetchMemes();
    }
  };
  return (
    <>
      <h1>Meme Container</h1>
      <p>This is a meme container component.</p>
      <div className="meme-container">
        {memeList.length
          ? memeList.map((meme) => <Cards key={meme.id} meme={meme} />)
          : showShimmer && <ShimmerCards />}
      </div>
    </>
  );
}

export default MemeContainer;
