import { F } from "ts-toolbelt"

const satisfies = 
<TWide>() => 
<TNarrow extends TWide>(narrow: F.Narrow<TNarrow>) => 
narrow

const num = satisfies<number>()(2)

export const userActions = satisfies<
    {
        type: string;
        roles: string[];
    }[]
    >()([
        {
            type: "view",
            roles: ["anonymous", "admin"]
        },
        {
            type: "create",
            roles: ["admin"],
        },
        {
            type: "update",
            roles: ["admin", "loggedIn"],
        },
        {
            type: "delete",
            roles: ["admin"]
        }
    ] );

type Action = typeof userActions[number]['type'];
type Role = typeof userActions[number]['roles'][number];