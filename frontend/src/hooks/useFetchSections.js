import { useEffect, useState } from "react";
import { getSections } from "../helpers/helperSections/getSections";
import { deleteSection } from '../helpers/helperSections/deleteSections';
 
export const useFetchSections = () => {

    const [section, setSection] = useState([]);

    const fetchData = async () => {
        const result = await getSections();
        setSection(result.section);
    };

    useEffect(() => {

        fetchData();

    }, []);

    return section;

}

export const useFetchDeleteSection = () => {

    deleteSection();

}