"use client";
import Navbar from "../Navbar";
import { useState } from "react";

export default function Fetched() {
  const [input, inputchanger] = useState("");

  async function Fetcher() {
    const animres = await fetch(`https://api.jikan.moe/v4/anime/${input}/full`);
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${input}/characters`
    );
    const newdata = await res.json();
    const newanim = await animres.json();

    const animName = newanim.data.titles[0].title;
    const animtype = newanim.data.type;
    const animepi = newanim.data.episodes;
    const animStatus = newanim.data.status;
    const charName = newdata.data[0].character.name;
    const charimg = newdata.data[0].character.images.jpg.image_url;
    const actorName = newdata.data[0].voice_actors[1].person.name;
    const divElem = document.querySelector("#anime-container");

    divElem.innerHTML = `<div><p>Character Name : ${charName}</p><br><p>Voice Actor : ${actorName}</p><br><p>Anime : ${animName}</p><br><p>Type : ${animtype}</p><br><p>Episodes : ${animepi}</p><br><p>Status : ${animStatus}</p></div><div><img src = "${charimg}"><div>`;
  }

  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center mt-14 gap-14">
        <div className=" text-purple-400 font-mono text-3xl">
          Search your Anime character based on a id provided from MyAnimelist or
          explore by inputting random Ids.
        </div>
        <div className=" flex flex-row gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => inputchanger(e.target.value)}
            className=" w-96 h-10 p-2 rounded"
          ></input>
          <button
            onClick={Fetcher}
            className="text-white bg-violet-500 hover:bg-violet-600 p-2 w-50 rounded"
          >
            Click Me
          </button>
        </div>
        <div
          id="anime-container"
          className=" text-white flex flex-row gap-8 text-3xl font-mono"
        ></div>
      </main>
    </div>
  );
}
