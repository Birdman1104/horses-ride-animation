import { delayRunnable, removeRunnable } from '../Utils';
import { GameStatus, fetchAndProcess } from '../gameLogic';
import { ObservableModel } from './ObservableModel';

export class GameModel extends ObservableModel {
    private _status: GameStatus;
    private _data: any = null;
    private _spadesDistance = 0;
    private _heartsDistance = 0;
    private _diamondsDistance = 0;
    private _clubsDistance = 0;

    constructor() {
        super('GameModel');

        this._status = GameStatus.UNKNOWN;
        this.makeObservable();
    }

    get status(): GameStatus {
        return this._status;
    }

    set status(value: GameStatus) {
        this._status = value;
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }

    get spadesDistance(): number {
        return this._spadesDistance;
    }

    set spadesDistance(value: number) {
        this._spadesDistance = value;
    }

    get heartsDistance(): number {
        return this._heartsDistance;
    }

    set heartsDistance(value: number) {
        this._heartsDistance = value;
    }

    get clubsDistance(): number {
        return this._clubsDistance;
    }

    set clubsDistance(value: number) {
        this._clubsDistance = value;
    }

    get diamondsDistance(): number {
        return this._diamondsDistance;
    }

    set diamondsDistance(value: number) {
        this._diamondsDistance = value;
    }

    public setState(state: GameStatus): void {
        this._status = state;
    }

    public async initialize(): Promise<void> {
        this.updateData();
    }

    public updateData(): void {
        this.fetchData();
    }

    public async fetchData(): Promise<void> {
        fetchAndProcess()
            .then((processedData) => {
                this._data = processedData;
                this._status = this._data.GameStatus;

                this._heartsDistance = this._data.Hearts.distance;
                this._clubsDistance = this._data.Clubs.distance;
                this._diamondsDistance = this._data.Diamonds.distance;
                this._spadesDistance = this._data.Spades.distance;

                removeRunnable(() => this.fetchData());
                delayRunnable(1, () => this.fetchData(), null);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
