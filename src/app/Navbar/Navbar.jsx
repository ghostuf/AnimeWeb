import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav className=" bg-purple-600 flex flex-row justify-between items-center h-20 p-4 w-auto text-sm  md:text-xl lg:text-2xl">
        <div className=" mr-1">
          <Link href="http://localhost:3000/">KnowYourCharacter</Link>
        </div>
        <div className="flex flex-row gap-1 sm:gap-2 lg:gap-4">
          <div className="flex flex-row gap-1 sm:gap-2 lg:gap-4">
            <div className=" min-w-9 max-w-20 flex justify-center ">
              <Link href="About" target="_blank">
                About
              </Link>
            </div>
            <div className=" min-w-20 max-w-32  flex justify-center mr-1">
              <Link href="Fetcher" target="_blank">
                Anime-API
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-1 sm:gap-2 lg:gap-4 items-center justify-between">
            <div className="">
              <img src="/next.svg" alt="img" className="w-20" />
            </div>
            <div className="">
              <img src="/vercel.svg" alt="img" className="w-20" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
