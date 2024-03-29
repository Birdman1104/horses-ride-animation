export async function getGameData(): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify(1444116);
    try {
        const response = await fetch('https://m.ssplaywin.club/exchangeapi/xgame/book', {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(`Error fetching data, `, err);
    }
}
