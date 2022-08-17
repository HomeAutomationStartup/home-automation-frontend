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
