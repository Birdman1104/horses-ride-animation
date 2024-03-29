import { delayRunnable } from '../Utils';
import { CARDS } from '../configs/Constants';
import { getGameData } from '../gameLogic';
import { ObservableModel } from './ObservableModel';

export enum GameState {
    Unknown,
    PreStart,
    Action,
    Finish,
}

export class GameModel extends ObservableModel {
    private _state: GameState;
    private data: any = {};
    private _spadesSegment = 0;
    private _heartsSegment = 0;
    private _diamondsSegment = 0;
    private _clubsSegment = 0;

    constructor() {
        super('GameModel');

        this._state = GameState.Unknown;
        this.makeObservable();
    }

    get state(): GameState {
        return this._state;
    }

    set state(value: GameState) {
        this._state = value;
    }

    get spadesSegment(): number {
        return this._spadesSegment;
    }

    set spadesSegment(value: number) {
        this._spadesSegment = value;
    }

    get heartsSegment(): number {
        return this._heartsSegment;
    }

    set heartsSegment(value: number) {
        this._heartsSegment = value;
    }

    get clubsSegment(): number {
        return this._clubsSegment;
    }

    set clubsSegment(value: number) {
        this._clubsSegment = value;
    }

    get diamondsSegment(): number {
        return this._diamondsSegment;
    }

    set diamondsSegment(value: number) {
        this._diamondsSegment = value;
    }

    public setState(state: GameState): void {
        this._state = state;
    }

    public async initialize(): Promise<void> {
        this.updateData();
    }

    public updateData(): void {
        this.fetchData();
    }

    public async fetchData(): Promise<void> {
        this.data = await getGameData();
        const cardsData = getCardsData(this.data);
        // console.warn(this.data);

        if (!anySegmentBiggerThanZero(cardsData)) {
            this._state = GameState.PreStart;
        }

        // console.warn('game started - ', anySegmentBiggerThanZero(cardsData));
        // console.warn(cardsInfo);

        // console.warn(this.data.channel.game.bettingWindowTime, this.data.channel.game.bettingWindowPercentageComplete);

        // if (this.data.find((el) => el.status !== 'IN_PLAY')) {
        //     console.warn(this.data);
        // }

        // if (!anySegmentBiggerThanZero(this.data)) {
        //     console.warn(this.data);

        //     this.state = GameState.Action;

        //     this._spadesSegment = getSegmentOf(SPADES, this.data);
        //     this._heartsSegment = getSegmentOf(HEARTS, this.data);
        //     this._clubsSegment = getSegmentOf(CLUBS, this.data);
        //     this._diamondsSegment = getSegmentOf(DIAMONDS, this.data);
        // }
        // removeRunnable(() => this.fetchData());
        delayRunnable(1, () => this.fetchData(), null);
    }
}

const getCardsData = (data: any): any[] => {
    const { objects } = data.channel.game.gameData;
    return objects.filter((e) => CARDS.indexOf(e.name) !== -1);
};

const getSegmentOf = (type: string, data: any): number => {
    return data.find((el) => el.name === type).properties.find((p) => p.name === 'Segment').value;
};

const anySegmentBiggerThanZero = (data: any): boolean => {
    data.forEach((d) => {
        d.properties.forEach((p) => {
            if (p.name === 'Segment') {
                console.log(p.value);
            }
        });
    });
    return !!data.find((el) => el.properties.find((p) => p.name === 'Segment').value > 0);
};

const getPlaceOf = (type: string, data: any): number => {
    return data.find((el) => el.name === type).properties.find((p) => p.name === 'Place').value;
};
