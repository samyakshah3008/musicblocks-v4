import type { TBrickArgDataType, TBrickColor, TBrickCoords, TBrickExtent } from '@/@types/brick';

import { BrickModelExpression } from '../model';
import { generatePath } from './utils/path';

// -------------------------------------------------------------------------------------------------

/**
 * @class
 * Final class that defines a expression brick.
 */
export default class BrickExpression extends BrickModelExpression {
    constructor(params: {
        // intrinsic
        name: string;
        label: string;
        glyph: string;
        dataType: TBrickArgDataType;
        args: Record<
            string,
            {
                label: string;
                dataType: TBrickArgDataType;
                meta: unknown;
            }
        >;
        // style
        colorBg: TBrickColor;
        colorFg: TBrickColor;
        outline: TBrickColor;
        scale: number;
    }) {
        super(params);
    }

    public get extent(): TBrickExtent {
        return { width: 0, height: 0 };
    }

    public get argsCoords(): Record<string, TBrickCoords> {
        return {};
    }

    public get SVGpath(): string {
        const argsLength = Object.keys(this._args).length;

        return generatePath({
            hasNest: false,
            hasNotchArg: true,
            hasNotchInsTop: false,
            hasNotchInsBot: false,
            scale: this._scale,
            innerLengthX: 100,
            argHeights: Array.from({ length: argsLength }, () => 17),
        }).path;
    }

    public get SVG(): string {
        return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
                <svg
                    width="103.5"
                    height="31.5"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg">
                <defs />
                <g>
                    <g transform="scale(${this._scale})">
                    <path
                        d="m 8.5,0.5 h 60 v 20 h -60 v -8 -1 h -6 v 3 h -2 v -8 h 2 v 3 h 6 v -1 z"
                        style="fill:${this._colorBg};fill-opacity:1;stroke:${this._outline};stroke-width:1;stroke-linecap:round;stroke-opacity:1"
                    />
                    <text
                        style="font-size:10px;font-family:sans-serif;text-anchor:start;fill:${this._colorFg};">
                        <tspan x="13" y="14">${this._label}</tspan></text>
                    </g>
                </g>
                </svg>
                `;
    }
}
