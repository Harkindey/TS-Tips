// export function returnWhatIPassIn(input: string): string
// export function returnWhatIPassIn(input: number): number

export const returnWhatIPassIn= <TInput>(input: TInput): TInput => {
    return input;
}

const result = returnWhatIPassIn(12)
const result2 = returnWhatIPassIn({
    name: 'bean',
    age: 12,
})