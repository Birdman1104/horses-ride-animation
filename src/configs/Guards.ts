import Head from '../models/HeadModel';

export const gameModelGuard = (): boolean => {
    return !!Head.gameModel;
};
