import { CARDS } from '../configs/Constants';
import { DATA } from './GameConfig';

const fetchData = async (): Promise<any> => {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(DATA);
        }, 1000),
    );
};

export async function getData() {
    const data = await fetchData();

    const { objects } = data.channel.game.gameData;
    const arr = objects.filter((e) => CARDS.indexOf(e.name) !== -1);

    return arr;
}

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const raw = JSON.stringify(1444116);

fetch('https://m.ssplaywin.club/exchangeapi/xgame/book', {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
})
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
