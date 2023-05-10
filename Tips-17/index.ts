export type Letters = "a" | "b" | "c";

// Mapping over union is called distributivity in typescript
type RemoveC<TType> = TType extends 'c' ? never: TType;
type ReplaceCwithD<TType> = TType extends 'c' ? 'd': TType;

type WowWithoutC = RemoveC<Letters>;
type WowWithD = ReplaceCwithD<Letters>;