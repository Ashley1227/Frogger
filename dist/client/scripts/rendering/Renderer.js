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
    offset(x, y) {
        this.xOffset = x;
        this.yOffset = y;
        return this;
    }
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
    addChild(child) {
        this.children.push(child);
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