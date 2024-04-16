import { useEffect, useState } from "react";
import { getCommunities } from "../helpers/helperCommunities/getCommunities";

export const useFetchCommunities = () => {

    const [community, setCommunity] = useState([]);

    const fetchData = async () => {
        const result = await getCommunities();
        setCommunity(result.community);
    };

    useEffect(() => {

        fetchData();

    }, []);


    return community;

}
