import {GlobalReducer} from './types';

declare global {
    interface GlobalReducerEvent {
        LOG_IN: {}
    }
}

export const usersReducer: GlobalReducer<{todos: {id: string}[]}> = (
    state,
    events
) => {
    return state
}