type Action = "view" |'create' | "update"|'delete';
type Role = "anonymous"|"admin"|"loggedIn";

export const userActions : {
    type:Action;
    roles: Role[];
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
]
