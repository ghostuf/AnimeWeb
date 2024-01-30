"use client";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

export default function Fetched() {
  const [input, inputchanger] = useState("");

  const handler = (f) => {
    const ENTER = 13;

    if (f.keyCode === ENTER)
        Fetcher()
  };

  async function Fetcher() {
    
    const animres = await fetch(`https://api.jikan.moe/v4/anime/${input}/full`);
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${input}/characters`
    );
    const newdata = await res.json();
    const newanim = await animres.json();

    const animName = newanim.data.titles[0].title;
    const animimg = newanim.data.images.jpg.image_url;
    const animtype = newanim.data.type;
    const animepi = newanim.data.episodes;
    const animStatus = newanim.data.status;
    const charName = newdata.data[0].character.name;
    const charimg = newdata.data[0].character.images.jpg.image_url;
    const actorName = newdata.data[0].voice_actors[0].person.name;
    const divElem = document.querySelector("#anime-container");

    divElem.innerHTML = `<div><p>Character Name : ${charName}</p><br><p>Voice Actor : ${actorName}</p><br><p>Anime : ${animName}</p><br><p>Type : ${animtype}</p><br><p>Episodes : ${animepi}</p><br><p>Status : ${animStatus}</p></div><div style="display: flex; flex-direction: row;"><div><img src = ${charimg} style="margin-right: 30px;"></div><div><img src = ${animimg}></div></div>`;
  }

  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center mt-14 ml-5 gap-14 ">
        <div className=" text-purple-400 font-mono text-xl md:text-2xl lg:text-3xl ml-5">
          Search your Anime character based on a id provided from MyAnimelist or
          explore by inputting random Ids.
        </div>
        <div className=" flex flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => inputchanger(e.target.value)}
            onKeyUp= {(f) => handler(f)}
            className=" w-50 h-10 p-2 rounded md:w-64 lg:w-96"
            id = "js-input"
          ></input>
          <button
            onClick={Fetcher}
            className="text-white bg-violet-500 hover:bg-violet-600 p-2 w-50  rounded"
          >
            Click Me
          </button>
        </div>
        <div
          id="anime-container"
          className=" text-white flex flex-row gap-8 text-base md:text-2xl lg:text-3xl font-mono p-5"
        ></div>
      </main>
    </div>
  );
}
