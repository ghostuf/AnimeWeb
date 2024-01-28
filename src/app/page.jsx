import Navbar from "./Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="text-purple-400 block">
        <div className="flex flex-col items-left mt-24 ml-10">
          <div className=" text-5xl font-mono">
            Know your Anime characters from this website!
          </div>
          <div className="flex flex-row gap-80 items-center">
            <div className="text-white text-2xl font-mono w-1/2">
              {" "}
              your ultimate destination for in-depth and captivating
              descriptions of your favorite anime characters! Immerse yourself
              in the vibrant and diverse world of anime as we bring you detailed
              profiles, backstories, and unique insights into the personalities
              that make these characters unforgettable.Explore a vast database
              that covers a wide range of anime genres, from action-packed
              shonen adventures to heartwarming slice-of-life stories.
              <br />
              <br />
              Whether you're a seasoned anime enthusiast or just getting
              started, AnimeCharacterHub.com is your go-to source for
              comprehensive character information.
            </div>
            <div className="w-100 h-100">
              <img src="/noragami.png" className=" object-contain" />
            </div>
          </div>
          <div>
            <Link href="Fetcher" target="_blank">
              <button className="text-white bg-violet-500 hover:bg-violet-600 p-2 w-52">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
