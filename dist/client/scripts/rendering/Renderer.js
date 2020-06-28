export default class Renderer {
    constructor(canvas) {
        this.shouldRender = true;
        this.xOffset = 0;
        this.yOffset = 0;
        this.preInit(canvas);
        this.init(canvas);
        this.postInit(canvas);
    }
    ;
    preInit(canvas) {
        this.canvas = canvas;
        this.children = [];
    }
    ;
    init(canvas) {
        canvas.parentElement.onresize = () => {
            this.onResize();
        };
    }
    postInit(canvas) {
        this.onResize();
    }
    ;
    /**
     * Offset relative to where it currently is
     */
    offset(x, y) {
        this.xOffset += x;
        this.xOffset += y;
        for (let renderer of this.children) {
            renderer.offset(x, y);
        }
        return this;
    }
    /**
     * Absolute offset–change the offset to a set value
     */
    offsetAbs(x, y) {
        this.xOffset = x;
        this.yOffset = y;
        for (let renderer of this.children) {
            renderer.offset(x, y);
        }
        return this;
    }
    addChild(child) {
        child.parent = this;
        this.children.push(child);
        return child;
    }
    onResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.render();
    }
    render() {
        for (let c of this.children) {
            if (c.shouldRender)
                c.render();
        }
    }
    ;
}
//# sourceMappingURL=Renderer.js.map