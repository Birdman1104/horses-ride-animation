import { lego } from '@armathai/lego';
import { ICellConfig, PixiGrid } from '@armathai/pixi-grid';
import anime from 'animejs';
import { Graphics } from 'pixi.js';
import { getForegroundGridConfig } from '../configs/gridConfigs/ForegroundViewGC';
import { BoardEvents } from '../events/MainEvents';
export class ForegroundView extends PixiGrid {
    private splash: Graphics;
    constructor() {
        super();

        lego.event.on(BoardEvents.HorseReachedFinish, this.flash, this);
        this.build();
    }

    private flash(): void {
        anime({
            targets: this.splash,
            alpha: 1,
            duration: 300,
            direction: 'alternate',
            easing: 'easeInOutSine',
        });
    }

    public getGridConfig(): ICellConfig {
        return getForegroundGridConfig();
    }

    public rebuild(config?: ICellConfig | undefined): void {
        super.rebuild(this.getGridConfig());
    }

    private build(): void {
        this.splash = new Graphics();
        this.splash.beginFill(0xffffff, 1);
        this.splash.drawRect(0, 0, 10, 10);
        this.splash.endFill();
        this.splash.alpha = 0;
        this.setChild('splash', this.splash);
    }
}
