declare global {
    interface GlobalReducerEvent{

    }
}
export type GlobalReducer<TState> = (state: TState, event: {
        [EvenType in keyof GlobalReducerEvent]: {
            type: EvenType;
        } & GlobalReducerEvent[EvenType];
    }[keyof GlobalReducerEvent]
) => TState