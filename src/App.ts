import { lego, legoLogger } from '@armathai/lego';
import { PixiStatsPlugin } from '@armathai/pixi-stats';
import { Application } from 'pixi.js';
import PixiStage from './MainStage';
import SoundController from './SoundController';
import { fitDimension } from './Utils';
import { assets } from './assets/assetsNames/assets';
import { atlases } from './assets/assetsNames/atlas';
import { fonts } from './assets/assetsNames/fonts';
import { MAX_FPS } from './configs/Constants';
import { mapCommands } from './configs/EventCommandPairs';
import { ScreenSizeConfig } from './configs/ScreenSizeConfig';
import { MainGameEvents, WindowEvent } from './events/MainEvents';

class App extends Application {
    public stage: PixiStage;

    public constructor() {
        super({
            backgroundColor: 0xffffff,
            powerPreference: 'high-performance',
            antialias: true,
            resolution: Math.max(window.devicePixelRatio || 1, 2),
            sharedTicker: true,
        });
    }

    public async init(): Promise<void> {
        this.ticker.maxFPS = MAX_FPS;
        this.stage = new PixiStage();
        // @ts-ignore
        this.view.classList.add('app');
        // @ts-ignore
        document.body.appendChild(this.view);

        globalThis.__PIXI_APP__ = this;
        if (process.env.NODE_ENV !== 'production') {
            this.initStats();
            this.initLego();
        }
        this.loadSounds();
    }

    public appResize(): void {
        const { clientWidth: w, clientHeight: h } = document.body;
        if (w === 0 || h === 0) return;

        const { min, max } = ScreenSizeConfig.size.ratio;
        const { width, height } = fitDimension({ width: w, height: h }, min, max);

        this.resizeCanvas(width, height);
        this.resizeRenderer(width, height);

        this.stage.resize();
        lego.event.emit(MainGameEvents.Resize);
    }

    public onFocusChange(focus: boolean): void {
        lego.event.emit(WindowEvent.FocusChange, focus);
    }

    private loadAssets(): void {
        for (const asset of assets) {
            const { name, path } = asset;
            this.loader.add(name, path);
        }
        for (const atlas of atlases) {
            const { name, json } = atlas;
            this.loader.add(name, json);
        }
        for (const font of fonts) {
            const { name, path } = font;
            this.loader.add(name, path);
        }

        this.loader.onComplete.add(this.onLoadComplete, this);
        this.loader.load();
    }

    private loadSounds(): void {
        SoundController.loadSounds();
        this.loadAssets();
    }

    private onLoadComplete(): void {
        this.appResize();
        this.stage.start();
        this.ticker.add(() => this.stage.update());
        lego.command.execute(mapCommands);
        lego.event.emit(MainGameEvents.MainViewReady);
    }

    private resizeCanvas(width: number, height: number): void {
        const { style } = this.renderer.view;
        if (!style) return;
        style.width = `${width}px`;
        style.height = `${height}px`;
    }

    private resizeRenderer(width: number, height: number): void {
        this.renderer.resize(width, height);
    }

    private initLego(): void {
        legoLogger.start(lego, Object.freeze({}));
    }

    private initStats(): void {
        //@ts-ignore
        const stats = new PixiStatsPlugin(this);
        document.body.appendChild(stats.stats.dom);
        this.ticker.add(() => stats.stats.update());
    }
}

export default App;
