import { ICellConfig, PixiGrid } from '@armathai/pixi-grid';
import { getGameViewGridConfig } from '../configs/gridConfigs/GameViewGC';
import { BoardView } from './BoardView';

export class GameView extends PixiGrid {
    private board: BoardView;

    constructor() {
        super();

        this.build();
    }

    public getGridConfig(): ICellConfig {
        return getGameViewGridConfig();
    }

    public rebuild(config?: ICellConfig | undefined): void {
        super.rebuild(this.getGridConfig());
    }

    private build(): void {
        //
    }

    private buildBoard() {
        this.board = new BoardView();
        this.setChild('board', this.board);
    }
}
