export type DeepPartial<Thing> = Thing extends Function 
    ? Thing 
    : Thing extends Array<infer InferredArrayMember>
    ? DeepPartialArray<InferredArrayMember>
    : Thing extends object
    ? DeepPartialObject<Thing>
    : Thing | undefined;

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
    [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

interface Post {
    id: string;
    comments: { value: string}[];
    meta: {
        name: string;
        description: string;
    }
}

const post: Partial<Post> = {
    id: "1",
    comments: [
        {value: "hello"}
    ],
    meta: {
        name: "bean",
        description: "food",
    }
}

const post2: DeepPartial<Post> = {
    id: "1",
    comments: [
        {value: "hello"}
    ]
}