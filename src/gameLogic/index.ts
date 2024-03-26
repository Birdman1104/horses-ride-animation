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

    const { gameData } = data.channel.game;
    console.warn(gameData);
}
