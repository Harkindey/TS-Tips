import { String, Union } from "ts-toolbelt";

const query = "/contacts?date=24-3-2023&country=NG"

type Query = typeof query;

type SecondQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondQueryPart, "&">;

type QueryParams = {
    [QueryElement in QueryElements[number]] : {
        [Key in String.Split<QueryElement, "=">[0]]: String.Split<QueryElement, "=">[1]
    }
}[QueryElements[number]]

const obj1: QueryParams = {
    date:"24-3-2023",
}

const obj2: Union.Merge<QueryParams> = {
    date:"24-3-2023",
    country: 'NG'
}