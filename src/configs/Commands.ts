import { lego } from '@armathai/lego';
import { GameStatus } from '../gameLogic';
import Head from '../models/HeadModel';
import { gameModelGuard } from './Guards';

export const initHeadModelCommand = (): void => Head.initialize();

export const onMainViewReadyCommand = () => {
    lego.command
        //
        .execute(initHeadModelCommand)
        .execute(initializeGameModelCommand);
};

const initializeGameModelCommand = (): void => Head.initializeGameModel();

const initializeModelsCommand = (): void => {
    lego.command.execute(initializeGameModelCommand);
};

const destroyGameModelCommand = (): void => Head.destroyGameModel();

const shutdownModelsCommand = (): void => {
    lego.command.guard(gameModelGuard).execute(destroyGameModelCommand);
};

export const onHorseReachedFinishCommand = (): void => {
    lego.command.payload(GameStatus.FINISHED).execute(setGameStatusCommand);
};
const setGameStatusCommand = (state: GameStatus): void => Head.gameModel?.setState(state);
