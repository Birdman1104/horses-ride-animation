import { Container, Graphics, Sprite } from 'pixi.js';

export class Arena extends Container {
    private arena: Sprite;
    private arena2: Sprite;
    private fence: Sprite;
    private fence2: Sprite;
    private lane: Sprite;
    private sky: Sprite;
    private finish: Sprite;

    constructor() {
        super();

        this.build();
    }

    public update(): void {
        //
    }

    public move(): void {
        this.arena.x -= 0.001;
        this.arena2.x -= 0.001;
        this.fence.x -= 0.001;
        this.fence2.x -= 0.001;
        this.finish.x -= 0.001;
        this.sky.x -= 0.0001;
    }

    private build(): void {
        this.arena = Sprite.from('arena.png');
        this.arena2 = Sprite.from('arena.png');
        this.fence = Sprite.from('fence.png');
        this.fence2 = Sprite.from('fence.png');
        this.lane = Sprite.from('lane.png');
        this.sky = Sprite.from('sky.png');
        this.finish = Sprite.from('finish.png');

        this.sky.position.set(0, 0);
        this.arena.position.set(-2, 128);
        this.arena2.position.set(this.arena.x + this.arena.width - 4, this.arena.y);
        this.fence.position.set(0, this.arena.y + this.arena.height / 2 + this.fence.height + 2);
        this.fence2.position.set(this.fence.x + this.fence.width - 4, this.fence.y);
        this.lane.position.set(1, this.fence.y);
        this.finish.position.set(1820, this.lane.y - this.finish.height / 4 + 15);

        this.addChild(this.sky);
        this.addChild(this.arena);
        this.addChild(this.arena2);
        this.addChild(this.lane);
        this.addChild(this.fence);
        this.addChild(this.fence2);
        this.addChild(this.finish);

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
