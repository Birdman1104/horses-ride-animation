import { ICellConfig, PixiGrid } from '@armathai/pixi-grid';
import { Sprite } from 'pixi.js';
import { getBackgroundGridConfig } from '../configs/gridConfigs/BackgroundViewGC';

export class BackgroundView extends PixiGrid {
    private bkg: Sprite;
    constructor() {
        super();
        this.buildBkg('bkg.jpg');
    }

    public getGridConfig(): ICellConfig {
        return getBackgroundGridConfig();
    }

    public rebuild(config?: ICellConfig | undefined): void {
        super.rebuild(this.getGridConfig());
    }

    private buildBkg(image: string): void {
        this.bkg?.destroy();

        this.bkg = Sprite.from(image);
        this.setChild('sprite', this.bkg);
    }
}
