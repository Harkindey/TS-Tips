export let age = 31;
age= 32
export const yourAge = 31;
yourAge = 32

export const name = "Matt";
name="bean"

const tsPeople = [
    "Damilola",
    "Fiyifoluwa",
    "Gbemisola",
    "Ayooluwa"
] as const;

tsPeople[0] = "Eddy"

const moreTsPeople = {
    Damilola: "Damilola",
    Fiyifoluwa: "fiyifoluwa",
    Gbemisola: "Gbemisola",
    Ayooluwa:  "Ayooluwa",
} as const

moreTsPeople.Damilola = 'Beanne'