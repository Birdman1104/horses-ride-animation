import { ICellConfig, PixiGrid } from '@armathai/pixi-grid';
import { Sprite } from 'pixi.js';
import { getForegroundGridConfig } from '../configs/gridConfigs/ForegroundViewGC';
export class ForegroundView extends PixiGrid {
    private logo: Sprite;

    constructor() {
        super();

        this.build();
    }

    public getGridConfig(): ICellConfig {
        return getForegroundGridConfig();
    }

    public rebuild(config?: ICellConfig | undefined): void {
        super.rebuild(this.getGridConfig());
    }

    private build(): void {
        this.buildLogo();
    }

    private buildLogo(): void {
        this.logo = Sprite.from('logo.png');
        this.setChild('logo', this.logo);
    }
}
