export const userActions = [
    {
        type: "view",
        role: ["anonymous", "admin"] // role not roles on purpose
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