"use client";
import { useState } from "react";

export default function Fetched() {
  const [input, inputchanger] = useState("");

  async function Fetcher() {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${input}/characters`
    );
    const newdata = await res.json();

    const charName = newdata.data[0].character.name;
    const charimg = newdata.data[0].character.images.jpg.image_url;
    const divElem = document.querySelector(".anime-container");

    divElem.innerHTML = `<p>character name: ${charName}</p><br><img src = "${charimg}">`;
  }

    return (
        <div className="container">
          <input
            type="text"
            value={input}
            onChange={(e) => inputchanger(e.target.value)}
          ></input>
          <button onClick={Fetcher}>Click Me</button>
    
          <div className="anime-container"></div>
        </div>
      );
}