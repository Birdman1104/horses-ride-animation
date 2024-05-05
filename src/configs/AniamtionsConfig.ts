import { BASE64_IMAGES } from '../imagesBase64';

export const getHorseFrames = (type: string): string[] => {
    const arr: string[] = [];
    for (let i = 0; i < 17; i++) {
        const img = `${type.toLowerCase()}_horse_${i < 10 ? '0' + i : i}`;
        arr.push(BASE64_IMAGES[type.toUpperCase()][img]);
    }

    return arr;
};
