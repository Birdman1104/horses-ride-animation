import { Container } from 'pixi.js';

export class BoardView extends Container {
    constructor() {
        super();

        this.build();
    }

    get viewName() {
        return 'BoardView';
    }

    private build(): void {
        //
    }
}
