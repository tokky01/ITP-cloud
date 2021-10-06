import {compute} from "../src/compute";
import {BonusType, Frame, Game} from "../src/types";

it("should return 300 on a perfect game", () => {
    const input300: Game = [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
    ];

    const score = compute(input300);

    expect(score).toBe(300);
});

it("should return 187", () => {
    const input187: Game = [
        [10, 0],
        [9, 1],
        [5, 5],
        [7, 2],
        [10, 0],
        [10, 0],
        [10, 0],
        [9, 0],
        [8, 2],
        [9, 1, 10]];

    const score = compute(input187);

    expect(score).toBe(187);
});
