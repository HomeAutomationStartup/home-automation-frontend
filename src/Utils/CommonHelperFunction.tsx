import Boy from './../Assets/Boy.svg';
import Girl from './../Assets/Girl.svg';
import Woman from './../Assets/Woman.svg';
import Fuse from 'fuse.js';

// export const toggleDarkMode = (value: boolean) => {
//     let mode;
//     if (!value) {
//         mode = LightColorRules;
//     } else {
//         mode = DarkColorRules;
//     }
//     console.log(mode);
//     console.log(value);
//     return mode;
// };

export const convertTheRange = (
    currentValue: any,
    in_min: any,
    in_max: any,
    out_min: any,
    out_max: any,
) => {
    let result =
        ((currentValue - in_min) * (out_max - out_min)) / (in_max - in_min) +
        out_min;
    return result;
};

export const choosePic = (item: any) => {
    let svg = null;
    switch (item) {
        case 'Boy':
            svg = Boy;
            break;
        case 'Girl':
            svg = Girl;
            break;
        case 'Woman':
            svg = Woman;
            break;
        case 'Man':
            svg = 'Man';
            break;
        default:
            svg = null;
    }
    return svg;
};

export const searchItem = (keyArray: any, dataArray: any) => {
    const options = {
        includeScore: true,
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.4,
        ignoreLocation: true,
        keys: keyArray,
    };

    const myIndex = Fuse.createIndex(options.keys, dataArray);
    const fuse = new Fuse(dataArray, options, myIndex);
    return fuse;
};

export const camalize = (str: any) => {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m: any, chr: any) => chr.toUpperCase());
};
