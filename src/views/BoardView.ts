import { lego } from '@armathai/lego';
import { Container, Rectangle } from 'pixi.js';
import { HEIGHT, WIDTH } from '../configs/Constants';
import { BoardEvents } from '../events/MainEvents';
import { GameModelEvents } from '../events/ModelEvents';
import { GameStatus } from '../gameLogic';
import { Arena } from './Arena';

export class BoardView extends Container {
    private arena: Arena | null;
    private canMove = false;

    constructor() {
        super();

        lego.event
            .on(GameModelEvents.StatusUpdate, this.onGameStatusUpdate, this)
            .on(GameModelEvents.DataUpdate, this.onGameDataUpdate, this)
            .on(GameModelEvents.ClubsDistanceUpdate, this.onClubsDistanceUpdate, this)
            .on(GameModelEvents.HeartsDistanceUpdate, this.onHeartsDistanceUpdate, this)
            .on(GameModelEvents.DiamondsDistanceUpdate, this.onDiamondsDistanceUpdate, this)
            .on(GameModelEvents.SpadesDistanceUpdate, this.onSpadesDistanceUpdate, this);
    }

    get viewName() {
        return 'BoardView';
    }

    public getBounds(): Rectangle {
        return new Rectangle(0, 0, WIDTH, HEIGHT);
    }

    public rebuild(): void {
        //
    }

    public update(): void {
        if (!this.canMove) return;
        this.arena?.update();
    }

    private onClubsDistanceUpdate(dx): void {
        console.log('clubs, ', dx);
        if (this.canMove) this.arena?.moveClubs(dx);
    }

    private onHeartsDistanceUpdate(dx): void {
        console.log('hearts, ', dx);
        if (this.canMove) this.arena?.moveHearts(dx);
    }

    private onDiamondsDistanceUpdate(dx): void {
        console.log('diamo, ', dx);
        if (this.canMove) this.arena?.moveDiamonds(dx);
    }

    private onSpadesDistanceUpdate(dx): void {
        console.log('spado, ', dx);
        if (this.canMove) this.arena?.moveSpades(dx);
    }

    private buildArena(data?: any): void {
        this.arena = new Arena();
        if (data) {
            switch (data.GameStatus) {
                case GameStatus.STOPPED:
                    // build normally
                    break;
                case GameStatus.FINISHED:
                    this.adjustHorsesPositions(data);
                    this.arena.setInFinishedState();
                    // this.arena.alignHorses();
                    // this.arena?.start();
                    break;
                case GameStatus.STARTED:
                    this.adjustHorsesPositions(data);
                    this.arena.hideGates();
                    this.arena.alignHorses();
                    break;

                default:
                    break;
            }
        }
        this.arena.on('horseReachedFinishLine', this.horseReachedFinishLine, this);

        this.addChild(this.arena);
    }

    private adjustHorsesPositions(data: any): void {
        this.arena?.setSpadesPos(data.Spades.distance);
        this.arena?.setHeartsPos(data.Hearts.distance);
        this.arena?.setDiamondsPos(data.Diamonds.distance);
        this.arena?.setClubsPos(data.Clubs.distance);
    }

    private destroyArena(): void {
        this.arena?.destroy();
        this.arena = null;
    }

    private horseReachedFinishLine(): void {
        lego.event.emit(BoardEvents.HorseReachedFinish);
    }

    private onGameDataUpdate(newData: any, oldData: any): void {
        console.log(newData);
        if (!oldData) {
            this.buildArena(newData);
        }
    }

    private onGameStatusUpdate(status: GameStatus): void {
        this.canMove = status === GameStatus.STARTED || status === GameStatus.FINISHED;

        switch (status) {
            case GameStatus.STOPPED:
                this.destroyArena();
                this.buildArena();
                break;
            case GameStatus.STARTED:
                this.arena?.start();
                break;
            case GameStatus.FINISHED:
                this.arena?.prepareFinish();
                break;

            default:
                break;
        }
    }
}
