export const userActions: 
{
    type: string;
    roles: string[]
}[] = [
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
] as const;

type Action = typeof userActions[number]['type'];
type Role = typeof userActions[number]['roles'][number];