import { lego } from '@armathai/lego';
import { BoardEvents, MainGameEvents } from '../events/MainEvents';
import { onHorseReachedFinishCommand, onMainViewReadyCommand } from './Commands';

export const mapCommands = () => {
    eventCommandPairs.forEach(({ event, command }) => {
        lego.event.on(event, command);
    });
};

export const unMapCommands = () => {
    eventCommandPairs.forEach(({ event, command }) => {
        lego.event.off(event, command);
    });
};

const eventCommandPairs = Object.freeze([
    {
        event: MainGameEvents.MainViewReady,
        command: onMainViewReadyCommand,
    },
    {
        event: BoardEvents.HorseReachedFinish,
        command: onHorseReachedFinishCommand,
    },
]);
