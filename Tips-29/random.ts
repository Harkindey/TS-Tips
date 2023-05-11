export const makeId = (): string => { // dont type return TS is smart
    return "id" + Math.random().toString(16).slice(2);
}

const result = makeId();