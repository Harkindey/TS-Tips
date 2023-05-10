import {GlobalReducer} from './types';

declare global {
    interface GlobalReducerEvent {
        ADD_TODO: {
            text: string
        }
    }
}

export const todosReducer: GlobalReducer<{todos: {id: string}[]}> = (
    state,
    events
) => {
    return state
}