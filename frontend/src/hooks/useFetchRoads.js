import { useEffect, useState } from "react";
import { getRoads } from "../helpers/helperRoads/getRoads";
import { deleteRoads } from "../helpers/helperRoads/deleteRoads";

export const useFetchRoads = () => {

    const [road, setRoad] = useState([]);

    const fetchData = async () => {
        const result = await getRoads();
        setRoad(result.road);
    };

    useEffect(() => {

        fetchData();

    }, []);


    return road;

}

export const useFetchDeleteRoads = (id_carretera, id) => {

    deleteRoads(id_carretera, id);
    
}