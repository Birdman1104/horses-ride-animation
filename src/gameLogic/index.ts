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
