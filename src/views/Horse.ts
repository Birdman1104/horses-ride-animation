import { AnimatedSprite, Container } from 'pixi.js';
import { getHorseFrames } from '../configs/AniamtionsConfig';
import { CLUBS, DIAMONDS, HEARTS, SPADES } from '../configs/Constants';

export class Horse extends Container {
    private animatedSprite: AnimatedSprite;
    constructor(private _type: string, private config: any) {
        super();

        this.build();
    }

    get type(): string {
        return this._type;
    }

    get scaleX(): string {
        return this.config.scale;
    }

    public playAnimation(): void {
        this.animatedSprite.play();
    }

    public stopAnimation(): void {
        this.animatedSprite.stop();
    }

    private build(): void {
        this.animatedSprite = AnimatedSprite.fromFrames(this.getFrames());
        this.animatedSprite.animationSpeed = 1 / 2; // 30 FPS
        this.animatedSprite.scale.set(this.config.scale);
        this.animatedSprite.anchor.set(0.5);
        this.addChild(this.animatedSprite);
    }

    private getFrames(): string[] {
        switch (this._type) {
            case SPADES:
                return getHorseFrames(SPADES);
            case CLUBS:
                return getHorseFrames(CLUBS);
            case DIAMONDS:
                return getHorseFrames(DIAMONDS);
            case HEARTS:
                return getHorseFrames(HEARTS);
            default:
                throw Error('Specify horse type');
        }
    }
}
