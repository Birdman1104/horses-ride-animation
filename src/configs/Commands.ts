import { lego } from '@armathai/lego';
import Head from '../models/HeadModel';
import { gameModelGuard } from './Guards';

export const initHeadModelCommand = (): void => Head.initialize();

export const onMainViewReadyCommand = () => {
    lego.command
        //
        .execute(initHeadModelCommand);
};

const initializeGameModelCommand = (): void => Head.initializeGameModel();

const initializeModelsCommand = (): void => {
    lego.command.execute(initializeGameModelCommand);
};

const destroyGameModelCommand = (): void => Head.destroyGameModel();

const shutdownModelsCommand = (): void => {
    lego.command.guard(gameModelGuard).execute(destroyGameModelCommand);
};
