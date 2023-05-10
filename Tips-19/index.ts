export type Obj = {
    a: "F00",
    a2: "a2",
    a3: "a3",
    b: "b",
    b1: "b1",
    b2: "b2"
}

type ValuesOfKeysStartingWithA<Object> = {
    [K in Extract<keyof Object, `a${string}`>]: Object[K];
}[Extract<keyof Object, `a${string}`>];

//Brilliant
type SecondValuesOfKeysStartingWithA<Object, _ExtractedKeys extends keyof Object = Extract<keyof Object, `a${string}`> > = {
    [K in _ExtractedKeys]: Object[K];
}[_ExtractedKeys];

type NewUnion = ValuesOfKeysStartingWithA<Obj>;
type SecondNewUnion = SecondValuesOfKeysStartingWithA<Obj>;