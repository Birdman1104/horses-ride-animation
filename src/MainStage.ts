import { Container } from 'pixi.js';
import { ForegroundView } from './views/ForegroundView';
import { GameView } from './views/GameView';

class PixiStage extends Container {
    private started = false;
    private gameView: GameView;
    private foregroundView: ForegroundView;

    constructor() {
        super();
    }

    public update(): void {
        if (!this.started) return;
        this.gameView?.update();
    }

    public resize(): void {
        this.gameView?.rebuild();
        this.foregroundView?.rebuild();
    }

    public start(): void {
        this.gameView = new GameView();
        this.addChild(this.gameView);
        this.foregroundView = new ForegroundView();
        this.addChild(this.foregroundView);

        this.started = true;
    }
}

export default PixiStage;
