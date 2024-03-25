import { Container, Graphics, Rectangle } from 'pixi.js';
import { Arena } from './Arena';
import { StartingGate } from './StartingGate';

export class BoardView extends Container {
    private arena: Arena;
    private startingGate: StartingGate;

    constructor() {
        super();

        this.build();
    }

    get viewName() {
        return 'BoardView';
    }

    public getBounds(skipUpdate?: boolean | undefined, rect?: PIXI.Rectangle | undefined): PIXI.Rectangle {
        return new Rectangle(0, 0, 800, 600);
    }

    private build(): void {
        this.arena = new Arena();
        this.addChild(this.arena);

        this.startingGate = new StartingGate();
        this.startingGate.position.set(300, 140);
        this.addChild(this.startingGate);

        // this.drawBounds();
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
