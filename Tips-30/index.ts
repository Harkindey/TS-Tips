// never pluralize
type Routes ="/user" | "/admin/user" | "admin";
const gotoRoute = (route: Routes) => {} // SMH 😒

//Different case between variables and types
type Name = string
const name: Name = "bean"


// use T with Type declaration
export type Response<TData, TError> = {
    data: TData;
    error: TError;
}