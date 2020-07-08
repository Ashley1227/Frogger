import Texture from "../Texture";
import Vector2 from "../../../../../../main/scripts/engine/math/Vector2";

export default class TexMap extends Texture {
    public subWidth: number = 16;
    public subHeight: number = 16;

    constructor(texture: Texture) {
        super(texture.image);
    }

    setSubSize(subWidth: number, subHeight: number): TexMap {
        this.subWidth = subWidth;
        this.subHeight = subHeight;
        return this;
    }

    createSub(x: number, y: number): Texture {
        return this.copy().setViewport(
            x * this.subWidth + this.pos.x,
            y * this.subHeight + this.pos.y,
            this.subWidth,
            this.subHeight
        );
    }

    createSpecialSub(x: number, y: number, w: number, h: number): Texture {
        return this.copy().setViewport(x, y, w, h);
    }

    createSubs(amt: number, x: number, y: number): Texture[] {
        let subs: Texture[] = [];

        let cX = x;
        let cY = y;
        for(let i = 0; i < amt; i++) {
            subs.push(this.createSub(cX, cY));

            cX++;
            cY++;
            if(cX > this.width / this.subWidth)
                cX = 0;
            if(cY > this.height / this.subHeight)
                cY = 0;
        }

        return subs;
    }
}