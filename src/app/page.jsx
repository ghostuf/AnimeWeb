import Navbar from "./Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="text-purple-400 block mt-auto mb-auto">
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-13 lg:gap-14 items-left mt-10 sm:mt-16 md:mt-24 ml-5  sm:ml-7 md:ml-10">
          <div className=" text-lg md:text-2xl lg:text-5xl font-mono">
            Know your Anime characters from this website!
          </div>
          <div className="flex flex-row gap-10 sm:gap-40 md:gap-64 lg:gap-80 items-center">
            <div className="text-white  text-xs  md:text-2xl lg:text-3xl w-52 sm:w-64 md:w-96 lg:w-1/2 font-mono h-auto">
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
              started,{" "}
              <strong className=" text-purple-600">
                KnowYourCharacter.com
              </strong>{" "}
              is your go-to source for comprehensive character information.
            </div>
            <div className="w-56 sm:w-64 md:w-80 lg:w-auto">
              <img src="/noragami.png" className=" object-cover" />
            </div>
          </div>
          <div>
            <Link href="Fetcher" target="_blank">
              <button className="text-white bg-violet-500 hover:bg-violet-600 p-2 w-30 lg:w-40 h-7 lg:h-10 flex items-center justify-center text-sm lg:text-xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
