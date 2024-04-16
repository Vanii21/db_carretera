export const getSections = async () => {
    const url = `http://localhost:3001/sections`;
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await resp.json();
    
    return data;
}