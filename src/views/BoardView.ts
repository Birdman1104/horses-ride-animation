import { Container, Graphics, Rectangle, Sprite } from 'pixi.js';

export class BoardView extends Container {
    private arena: Sprite;
    private fence: Sprite;
    private lane: Sprite;
    private sky: Sprite;

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
        this.arena = Sprite.from('arena.png');
        this.fence = Sprite.from('fence.png');
        this.lane = Sprite.from('lane.png');
        this.sky = Sprite.from('sky.png');

        this.sky.position.set(0, 0);
        this.arena.position.set(-2, 128);
        this.fence.position.set(0, this.arena.y + this.arena.height / 2 + this.fence.height + 2);
        this.lane.position.set(1, this.fence.y);

        this.addChild(this.sky);
        this.addChild(this.arena);
        this.addChild(this.lane);
        this.addChild(this.fence);

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
