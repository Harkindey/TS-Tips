interface UserInfo {
    name: string;
    role: "admin" | undefined;
}

export const createUser = (userinfo: UserInfo) => {};

createUser({
    name: "Matt",
    role: "admin"
})
createUser({
    name: "David",
    role: "admin"
})
createUser({
    name: "Laura",
    role: undefined
})
createUser({
    name: "Beanne",
    role: undefined
})
createUser({
    name: "Gbemisola",
    role: undefined
})