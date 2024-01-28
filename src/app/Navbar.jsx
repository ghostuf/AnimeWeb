import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <nav className=" bg-purple-600 flex flex-row justify-between items-center h-20 p-4  text-2xl">
                <div className="nav-header">
                    <Link href = "http://localhost:3000/" target="_blank">
                        Project
                    </Link>
                </div>
                <div className="flex flex-row  gap-10">
                    <div className="">
                        <Link href = "About" target="_blank">
                            About    
                        </Link>
                    </div>
                    <div className="api-container">
                        <Link href = "Fetcher" target="_blank">
                            Anime-API    
                        </Link>
                    </div>
                    <div className="flex flex-row gap-10 items-center justify-between">
                        <div className="">
                            <img src = "/next.svg" alt ="img" className="w-20 "/>
                        </div>
                        <div className="insta-container">
                            <img src = "/vercel.svg" alt ="img" className="w-20"/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}