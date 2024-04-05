import anime from 'animejs';
import { Container, Sprite, Texture, TilingSprite } from 'pixi.js';
import {
    CLUBS,
    ClubsDoorPos,
    ClubsPos,
    DEFAULT_SPEED,
    DIAMONDS,
    DiamondsDoorPos,
    DiamondsPos,
    HEARTS,
    HORSES_POS,
    HeartsDoorPos,
    HeartsPos,
    SPADES,
    SpadesDoorPos,
    SpadesPos,
    StartingGatePos,
    WIDTH,
} from '../configs/Constants';
import { Horse } from './Horse';

const DX = 15;

export class Arena extends Container {
    private arena: TilingSprite;
    private fence: TilingSprite;
    private sky: TilingSprite;
    private lane: Sprite;
    private finish: Sprite;

    private startingGate: Sprite;
    private spades: Sprite;
    private spadesDoor: Sprite;
    private hearts: Sprite;
    private heartsDoor: Sprite;
    private clubs: Sprite;
    private clubsDoor: Sprite;
    private diamonds: Sprite;
    private diamondsDoor: Sprite;

    private diamondsHorse: Horse;
    private clubsHorse: Horse;
    private heartsHorse: Horse;
    private spadesHorse: Horse;

    private movingFinishLine = false;
    private stopped = false;

    constructor() {
        super();

        this.build();
    }

    get doors(): Sprite[] {
        return [this.spadesDoor, this.heartsDoor, this.clubsDoor, this.diamondsDoor];
    }

    get gates(): Sprite[] {
        return [this.spades, this.hearts, this.clubs, this.diamonds, this.startingGate];
    }

    get horses(): Horse[] {
        return [this.spadesHorse, this.heartsHorse, this.clubsHorse, this.diamondsHorse];
    }

    public setClubsPos(dx: number): void {
        this.clubsHorse.x = 150 + dx * DX;
    }

    public setHeartsPos(dx: number): void {
        this.heartsHorse.x = 150 + dx * DX;
    }

    public setDiamondsPos(dx: number): void {
        this.diamondsHorse.x = 150 + dx * DX;
    }

    public setSpadesPos(dx: number): void {
        this.spadesHorse.x = 150 + dx * DX;
    }

    public moveClubs(dx: number): void {
        this.moveHorse(this.clubsHorse, dx);
    }

    public moveHearts(dx: number): void {
        this.moveHorse(this.heartsHorse, dx);
    }

    public moveDiamonds(dx: number): void {
        this.moveHorse(this.diamondsHorse, dx);
    }

    public moveSpades(dx: number): void {
        this.moveHorse(this.spadesHorse, dx);
    }

    public alignHorses(): void {
        this.horses.forEach((h) => {
            this.moveHorse(h, 0);
        });
    }

    public prepareFinish(): void {
        this.movingFinishLine = true;
        // flash
        // reset
    }

    private moveHorse(horse, x): void {
        const dif = (250 * (1 - horse.scaleX)) / 3;
        anime({
            targets: horse,
            x: 150 + x * DX + dif,
            duration: (x / 5) * 1000,
            easing: 'linear',
        });
    }

    public hideGates(): void {
        this.gates.forEach((g) => (g.x = -400));
        this.doors.forEach((d) => (d.visible = false));
    }

    public animateHorses(): void {
        this.horses.forEach((h) => h.playAnimation());
    }

    public setInFinishedState(): void {
        this.hideGates();
        this.finish.x = this.getFirstHorseX();
    }

    public update(): void {
        if (!this.stopped) {
            this.move();

            if (this.movingFinishLine) {
                this.horses.forEach((h) => {
                    if (h.x > this.finish.x) {
                        this.stopped = true;
                        this.horses.forEach((h) => h.stopAnimation());
                        this.emit('horseReachedFinishLine');
                    }
                });
            }
        }
    }

    public move(): void {
        this.fence.tilePosition.x -= DEFAULT_SPEED;
        this.arena.tilePosition.x -= DEFAULT_SPEED * 0.7;

        if (this.movingFinishLine) {
            this.finish.x -= DEFAULT_SPEED;
        }

        this.sky.tilePosition.x -= DEFAULT_SPEED * 0.3;

        this.gates.forEach((g) => (g.x -= DEFAULT_SPEED * 1.1));
    }

    public start(): void {
        this.doors.forEach((d) => (d.visible = false));
        this.horses.forEach((h) => h.playAnimation());
    }

    public reset(): void {
        this.movingFinishLine = false;
        this.stopped = false;
        this.doors.forEach((d) => (d.visible = true));
        this.finish.position.set(WIDTH + 200, this.lane.y - this.finish.height / 4 + 15);
        this.setGatesInitialPositions();
        this.setArenaInitialPositions();
    }

    private build(): void {
        this.buildArena();
        this.buildStartingGate();
    }

    private buildArena(): void {
        this.arena = new TilingSprite(Texture.from('arena_tile.png'), WIDTH * 3, 97);
        this.fence = new TilingSprite(Texture.from('fence_tile.png'), WIDTH * 3, 41);
        this.sky = new TilingSprite(Texture.from('sky.png'), WIDTH * 3, 167);
        this.lane = Sprite.from('lane.png');
        this.finish = Sprite.from('finish.png');

        this.setArenaInitialPositions();

        this.addChild(this.sky);
        this.addChild(this.arena);
        this.addChild(this.lane);
        this.addChild(this.fence);
        this.addChild(this.finish);
    }

    private buildStartingGate(): void {
        this.startingGate = Sprite.from('start.png');
        this.spades = Sprite.from('spadesStart.png');
        this.spadesDoor = Sprite.from('spadesClosed.png');
        this.hearts = Sprite.from('heartsStart.png');
        this.heartsDoor = Sprite.from('heartsClosed.png');
        this.clubs = Sprite.from('clubsStart.png');
        this.clubsDoor = Sprite.from('clubsClosed.png');
        this.diamonds = Sprite.from('diamondsStart.png');
        this.diamondsDoor = Sprite.from('diamondsClosed.png');

        this.diamondsHorse = new Horse(DIAMONDS, { scale: 1 });
        this.clubsHorse = new Horse(CLUBS, { scale: 0.9 });
        this.heartsHorse = new Horse(HEARTS, { scale: 0.8 });
        this.spadesHorse = new Horse(SPADES, { scale: 0.7 });

        this.setGatesInitialPositions();

        this.addChild(this.startingGate);

        this.addChild(this.spadesHorse);
        this.addChild(this.spades);
        this.addChild(this.spadesDoor);

        this.addChild(this.heartsHorse);
        this.addChild(this.hearts);
        this.addChild(this.heartsDoor);

        this.addChild(this.clubsHorse);
        this.addChild(this.clubs);
        this.addChild(this.clubsDoor);

        this.addChild(this.diamondsHorse);
        this.addChild(this.diamonds);
        this.addChild(this.diamondsDoor);
    }

    private setGatesInitialPositions(): void {
        this.startingGate.position.set(StartingGatePos.x, StartingGatePos.y);

        this.spades.position.set(SpadesPos.x, SpadesPos.y);
        this.spadesDoor.position.set(SpadesDoorPos.x, SpadesDoorPos.y);

        this.hearts.position.set(HeartsPos.x, HeartsPos.y);
        this.heartsDoor.position.set(HeartsDoorPos.x, HeartsDoorPos.y);

        this.clubs.position.set(ClubsPos.x, ClubsPos.y);
        this.clubsDoor.position.set(ClubsDoorPos.x, ClubsDoorPos.y);

        this.diamonds.position.set(DiamondsPos.x, DiamondsPos.y);
        this.diamondsDoor.position.set(DiamondsDoorPos.x, DiamondsDoorPos.y);

        this.diamondsHorse.position.set(HORSES_POS.Diamonds.x, HORSES_POS.Diamonds.y);
        this.clubsHorse.position.set(HORSES_POS.Clubs.x, HORSES_POS.Clubs.y);
        this.heartsHorse.position.set(HORSES_POS.Hearts.x, HORSES_POS.Hearts.y);
        this.spadesHorse.position.set(HORSES_POS.Spades.x, HORSES_POS.Spades.y);
    }

    private setArenaInitialPositions(): void {
        this.sky.position.set(0, 0);
        this.arena.position.set(-2, 128);
        this.fence.position.set(0, this.arena.y + this.arena.height / 2 + this.fence.height + 2);
        this.lane.position.set(0, this.fence.y);
        this.finish.position.set(WIDTH + 200, this.lane.y - this.finish.height / 4 + 15);
    }

    private getFirstHorseX(): number {
        let maxX = -1;
        this.horses.forEach((h) => {
            if (h.x > maxX) {
                maxX = h.x;
            }
        });

        return maxX;
    }
}
