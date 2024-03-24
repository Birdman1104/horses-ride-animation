import { GameModel } from './GameModel';
import { ObservableModel } from './ObservableModel';

class HeadModel extends ObservableModel {
    private _gameModel: GameModel | null = null;

    public constructor() {
        super('HeadModel');
        this.makeObservable();
    }

    set gameModel(value: GameModel | null) {
        this._gameModel = value;
    }

    get gameModel(): GameModel | null {
        return this._gameModel;
    }

    public initializeGameModel(): void {
        this._gameModel = new GameModel();
        this._gameModel.initialize();
    }

    public destroyGameModel(): void {
        this._gameModel?.destroy();
        this._gameModel = null;
    }
}

const Head = new HeadModel();

export default Head;
