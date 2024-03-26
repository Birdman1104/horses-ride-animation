import { Container, Graphics, Sprite } from 'pixi.js';

export class StartingGate extends Container {
    private startingGate: Sprite;
    private spades: Sprite;
    private spadesDoor: Sprite;
    private hearts: Sprite;
    private heartsDoor: Sprite;
    private clubs: Sprite;
    private clubsDoor: Sprite;
    private diamonds: Sprite;
    private diamondsDoor: Sprite;

    constructor() {
        super();

        this.build();
    }

    get doors(): Sprite[] {
        return [this.spadesDoor, this.heartsDoor, this.clubsDoor, this.diamondsDoor];
    }

    get gates(): Sprite[] {
        return [this.spades, this.hearts, this.clubs, this.diamonds];
    }

    public update(): void {
        //
    }

    private build(): void {
        this.startingGate = Sprite.from('start.png');
        this.spades = Sprite.from('spadesStart.png');
        this.spadesDoor = Sprite.from('spadesClosed.png');
        this.hearts = Sprite.from('heartsStart.png');
        this.heartsDoor = Sprite.from('heartsClosed.png');
        this.clubs = Sprite.from('clubsStart.png');
        this.clubsDoor = Sprite.from('clubsClosed.png');
        this.diamonds = Sprite.from('diamondsStart.png');
        this.diamondsDoor = Sprite.from('diamondsClosed.png');

        this.startingGate.position.set(0, 0);
        this.spades.position.set(-35, 12);
        this.spadesDoor.position.set(78, 105);
        this.hearts.position.set(-85, 32);
        this.heartsDoor.position.set(48, 130);
        this.clubs.position.set(-143, 52);
        this.clubsDoor.position.set(12, 160);
        this.clubsDoor.position.set(12, 160);
        this.diamonds.position.set(-222, 76);
        this.diamondsDoor.position.set(-50, 200);

        this.addChild(this.startingGate);
        this.addChild(this.spades);
        this.addChild(this.spadesDoor);
        this.addChild(this.hearts);
        this.addChild(this.heartsDoor);
        this.addChild(this.clubs);
        this.addChild(this.clubsDoor);
        this.addChild(this.diamonds);
        this.addChild(this.diamondsDoor);
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
