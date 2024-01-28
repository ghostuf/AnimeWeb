export default function Reciews({params}){ // props = ["prams", ""]
    return(
        <>
            <h1>Product {params.productID}: reviews: {params.reviewID}</h1>
        </>
    )
}