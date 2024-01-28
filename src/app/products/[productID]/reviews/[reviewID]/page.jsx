import Notfound from "@/app/not-found.jsx"

export default function Reviews({params}){ // props = ["prams", ""]

    if(parseInt(params.reviewID) > 1000){
        return(
            <div>
                <Notfound />
            </div>
        )
    }

    return(
        <>
            <h1>Product {params.productID}: reviews: {params.reviewID}</h1>
        </>
    )
}