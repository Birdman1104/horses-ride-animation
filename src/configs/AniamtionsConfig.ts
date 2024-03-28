export const getHorseFrames = (type: string): string[] => {
    const arr: string[] = [];
    for (let i = 0; i < 17; i++) {
        arr.push(`${type.toLowerCase()}_horse_${i < 10 ? '0' + i : i}.png`);
    }

    return arr;
};
