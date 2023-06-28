import { useParams } from "react-router-dom"
import { apiDomain } from "../../utils/utilsDomain";
import { useEffect, useState } from "react";
import Product from "../product/Product";

const HouseDetails = () => {
    const [listing, setListing] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchMoreDetails = async () => {
            const res = await fetch(apiDomain + '/listings/' + id)
            if (!res.ok) {
                throw new Error('Response was not ok')
            }
            const data = await res.json()
            setListing([data])
        }
        fetchMoreDetails();
    }, [])

    console.log(listing);
    return (
        // list
        listing && <Product listing={listing} />
    )
}

export default HouseDetails