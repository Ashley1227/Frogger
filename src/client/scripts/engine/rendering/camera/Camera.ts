import Vector2 from "../../../../../main/scripts/engine/math/Vector2";

export default class Camera {
    private position: Vector2;
    private prevPos: Vector2;

    public scale: Vector2;
    public prevScale: Vector2 = Vector2.ZERO;

    public viewort: Vector2;

    constructor(position: Vector2) {
        this.position = position;
        this.setScale(new Vector2(64, 64));
    }

    /**
     * doesn't actually render anything, just useful to have in the camera
     */
    render(canvas: HTMLCanvasElement): void {
        this.setViewport(canvas);
    }

    setViewport(canvas: HTMLCanvasElement) {
        this.viewort = new Vector2(canvas.width / this.scale.x, canvas.height / this.scale.y);
    }

    getPosition(): Vector2 {
        return this.position;
    }

    getScale(): Vector2 {
        return this.scale;
    }

    moveTo(position: Vector2): Camera {
        this.prevPos = this.position;
        this.position = position;
        return this;
    }
    move(amount: Vector2): Camera {
        this.prevPos = this.position;
        this.position = this.position.add(amount);
        return this;
    }

    setScale(scale: Vector2): Camera {
        this.prevScale = this.scale;
        this.scale = scale;
        return this;
    }
    changeScale(amount: Vector2): Camera {
        this.scale = this.scale;
        this.scale = this.scale.add(amount);
        return this;
    }
}