import Navbar from "../Navbar/Navbar";
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="text-white font-mono flex flex-col items-center justify-center gap-20 mt-20">
        <div className="text-2xl text-purple-600 flex  md:text-3xl lg:text-4xl mx-10 ">
          Welcome to KnowYourCharacter - Your Ultimate Anime Character
          Encyclopedia!
        </div>
        <div className=" w-auto text-xl mx-10  md:text-2xl lg:text-3xl">
          At KnowYourCharacter, we believe that every anime enthusiast deserves
          a comprehensive and personalized guide to their favorite characters.
          <br />
          <br />
          Our website is dedicated to bringing you a wealth of information about
          anime characters sourced directly from the renowned MyAnimeList
          platform using the powerful Jikan API (4.0.0).
        </div>
        <div className=" text-base md:text-xl lg:text-2xl w-auto mx-10">
          Developer contacts -- Mail: srijan102dahal@gmail.com
        </div>
      </div>
    </div>
  );
}
