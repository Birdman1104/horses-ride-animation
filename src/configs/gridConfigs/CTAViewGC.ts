import { lp } from '../../Utils';

export const getCTAGridConfig = () => {
    return lp(getCTAGridLandscapeConfig, getCTAGridPortraitConfig).call(null);
};

const getCTAGridLandscapeConfig = () => {
    const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
    return {
        name: 'mainCell',
        debug: { color: 0xff5027 },
        bounds,
        cells: [
            {
                name: 'cell',
                bounds: { x: 0.9, y: 0, width: 0.1, height: 0.1 },
            },
        ],
    };
};

const getCTAGridPortraitConfig = () => {
    const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
    return {
        name: 'mainCell',
        debug: { color: 0xff5027 },
        bounds,
        cells: [
            {
                name: 'cell',
                bounds: { x: 0.9, y: 0, width: 0.1, height: 0.1 },
            },
        ],
    };
};
