import { CellAlign } from '@armathai/pixi-grid';
import { lp } from '../../Utils';

export const getUIGridConfig = () => {
    return lp(getUIGridLandscapeConfig, getUIGridPortraitConfig).call(null);
};

const getUIGridLandscapeConfig = () => {
    const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
    return {
        name: 'ui',
        debug: { color: 0xd950ff },
        bounds,
        cells: [
            {
                name: 'pCta',
                bounds: { x: 0, y: 0, width: 0.3, height: 0.2 },
                align: CellAlign.rightCenter,
            },
        ],
    };
};

const getUIGridPortraitConfig = () => {
    const bounds = { x: 0, y: 0, width: document.body.clientWidth, height: document.body.clientHeight };
    return {
        name: 'ui',
        debug: { color: 0xd950ff },
        bounds,
        cells: [
            {
                name: 'pCta',
                bounds: { x: 0.7, y: 0.85, width: 0.3, height: 0.15 },
            },
        ],
    };
};
