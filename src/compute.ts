import {Frame, Game, LastFrame} from "./types";

export function compute(game: Game): number {
    return game.reduce((tot, frame, index) => {
            return tot + framePoints(frame) + strikeBonus(game, index, frame) + spareBonus(frame, game[index + 1])
        }
        , 0)
}


function spareBonus(frame: Frame | LastFrame, nexFrame: Frame | LastFrame): number {
    if (isSpare(frame) && !isStrike(frame)) {
        return 10 + nexFrame[0]
    }
    return 0
}


function strikeBonus(game: Game, index: number, frame: Frame | LastFrame) {
    const nextFrame = game[index + 1]
    const next2Frame = game[index + 2]
    if (isTurkey(frame, nextFrame, next2Frame)) {
        return 30
    } else if (isDouble(frame, nextFrame)) {
        return 20 + frameSum(next2Frame)
    } else if (isStrike(frame)) {
        return 10 + frameSum(nextFrame)
    }
    return 0
}


function frameSum(frame: Frame | LastFrame): number {
    if (frame.length === 3 && frame[0] === 10 && frame[1] === 10 && frame[2] === 10) {
        return 0
    }
    return frame.reduce((a, b) => a + b, 0)
}


const isSpare = (frame: Frame | LastFrame) => frameSum(frame) === 10 && frame[1] !== 10
const isStrike = (frame: Frame | LastFrame) => frameSum(frame) === 10 && frame[0] === 10 && frame.length === 2


function isDouble(frame: Frame | LastFrame, nextFrame: Frame | LastFrame): Boolean {
    if (isStrike(frame) && (isStrike(nextFrame))) {
        return true
    } else if (isStrike(frame) && nextFrame[0] === 10) {
        return true
    }
    return false
}

function isTurkey(frame: Frame | LastFrame, nextFrame: Frame | LastFrame, next2Frame: Frame | LastFrame) {
    if (isStrike(frame) && isStrike(nextFrame) && (isStrike(next2Frame))) {
        return true
    } else if (isStrike(frame) && isStrike(nextFrame) && next2Frame[0] === 10) {
        return true
    } else if (isStrike(frame) && nextFrame[0] === 10 && nextFrame[1] === 10) {
        return true
    } else if (frame[0] === 10 && frame[1] === 10 && frame[2] === 10) {
        return true
    }
    return false
}

function framePoints(frame: Frame | LastFrame): number {
    let tot = 0
    if (isStrike(frame) || isSpare(frame)) {
        return 0
    }
    return tot + frameSum(frame)
}

