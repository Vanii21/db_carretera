export const deleteRoads = async (id_carretera, id) => {
    const url = `http://localhost:3001/sections/delete/${id_carretera}?id=${id}`;

    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await resp.json();
    
    return data;
}