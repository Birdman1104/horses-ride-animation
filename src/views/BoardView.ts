import { lego } from '@armathai/lego';
import { Container, Graphics, Rectangle } from 'pixi.js';
import { BoardEvents } from '../events/MainEvents';
import { GameModelEvents } from '../events/ModelEvents';
import { GameState } from '../models/GameModel';
import { Arena } from './Arena';

export class BoardView extends Container {
    private arena: Arena;

    private canMove = false;

    constructor() {
        super();

        lego.event.on(GameModelEvents.StateUpdate, this.onGameStateUpdate, this);
        this.build();
    }

    get viewName() {
        return 'BoardView';
    }

    public getBounds(skipUpdate?: boolean | undefined, rect?: PIXI.Rectangle | undefined): PIXI.Rectangle {
        return new Rectangle(0, 0, 800, 600);
    }

    public update(): void {
        if (!this.canMove) return;
        this.arena?.update();
    }

    private build(): void {
        this.arena = new Arena();
        this.arena.on('horseReachedFinishLine', () => {
            lego.event.emit(BoardEvents.HorseReachedFinish);
        });
        this.addChild(this.arena);

        // this.drawBounds();
    }

    private onGameStateUpdate(state: GameState): void {
        this.canMove = state === GameState.Action;

        switch (state) {
            case GameState.Action:
                this.arena.start();
                break;

            default:
                break;
        }
    }

    private drawBounds(): void {
        const { x, y, width, height } = this.getBounds();
        const gr = new Graphics();
        gr.beginFill(0x22cc22, 0.5);
        gr.drawRect(x, y, width, height);
        gr.endFill();
        this.addChild(gr);
    }
}
