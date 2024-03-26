import { getData } from '../gameLogic';
import { ObservableModel } from './ObservableModel';

export enum GameState {
    Unknown,
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

    public async initialize(): Promise<void> {
        // this._state = GameState.Unknown;
        await this.updateData();
        this.data;
    }

    public async updateData(): Promise<void> {
        this.data = await getData();
    }
}
