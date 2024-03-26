import { Container, Sprite } from 'pixi.js';

export class Horse extends Container {
    private sprite: Sprite;
    constructor(private _type: string, private config: any) {
        super();

        this.build();
    }

    get type(): string {
        return this._type;
    }

    private build(): void {
        this.sprite = Sprite.from('horse.png');
        this.sprite.scale.set(this.config.scale);
        this.sprite.anchor.set(0.5);
        this.addChild(this.sprite);
    }
}
