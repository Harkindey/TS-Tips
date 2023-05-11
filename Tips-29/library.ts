import { handleNewState, State, Event } from ".";


const wrapHandleState = (event: Event) => {
    console.log(event);

    return handleNewState(event)
}