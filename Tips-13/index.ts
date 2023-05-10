export type ActionModule = typeof import("./constants")

// export type Action = "ADD_TODO" | "REMOVE_TODO" | "EDIT_TODO";
export type Action = ActionModule[keyof ActionModule];