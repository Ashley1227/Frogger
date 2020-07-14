import Identifiable from "../../../../../main/scripts/engine/identifier/Identifiable";
import Identifier from "../../../../../main/scripts/engine/identifier/Identifier";
import Vector2 from "../../../../../main/scripts/engine/math/Vector2";

export default abstract class Renderer implements Identifiable {
    public IDENTIFIER: Identifier;

    public canvas: HTMLCanvasElement;

    public parent: Renderer;
    public children: Renderer[];
    public shouldRender: boolean = true;

    public offset: Vector2 = new Vector2(0, 0);

    public ms: number = 0;
    private cFPS: number = 0;

    private startFrame: number = Date.now();

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.children = [];
    }


    initialise(): Renderer {
        setInterval(() => {
            this.countFPS(this.cFPS);
            this.cFPS = 0;
        }, 1000);
        return this;
    }

    countFPS(fps: number) {

    }

    /**
     * Offset relative to where it currently is
     */
    move(offset: Vector2): Renderer {
        for(let renderer of this.children) {
            renderer.move(offset);
        }
        this.offset = this.offset.add(offset);
        return this;
    }

    /**
     * Absolute offset–change the offset to a set value
     */
    moveTo(offset: Vector2): Renderer {
        for(let renderer of this.children) {
            renderer.moveTo(new Vector2(offset.x + this.offset.x - renderer.offset.x, offset.y + this.offset.y - renderer.offset.y));
            // renderer.move(offset);
            // renderer.move(this.offset.inverse());
        }
        this.offset = offset;
        return this;
    }

    addChild(child: Renderer): Renderer {
        child.parent = this;
        this.children.push(child);
        return child;
    }

    onResize(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        for(let r of this.children) {
            r.onResize();
        }
        this.render();
    }

    render(): void {
        this.startFrame = Date.now();

        for(let c of this.children) {
            if(c.shouldRender)
                c.render();
        }
        this.cFPS++;
    }

    finishRender(): void {
        this.ms = Date.now() - this.startFrame;
    }
}