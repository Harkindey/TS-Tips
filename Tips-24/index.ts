interface ApiData {
    "maps:longitude" : string;
    "maps:latitude" : string;
}

type RemoveMapsFromObj<T> = {
    [K in keyof T as RemoveMaps<K> ]: T[K]
}

type DesiredShape = RemoveMapsFromObj<ApiData>;


type RemoveMaps<T> = T extends `maps:${infer U}`? U : T;