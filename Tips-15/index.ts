export type Event =  {
    type: "LOG_IN";
    payload: {
        userId: string;
    }
} | {
    type: "SIGN_OUT";
};

const sendEvent = <Type extends Event["type"]>(
    ...args: Extract<Event, {type: Type}> extends {payload: infer TPayload} 
    ? [type: Type, payload: TPayload]
    : [type: Type]
    ) => {};

/** Correct */
sendEvent("SIGN_OUT");
sendEvent("LOG_IN",{
    userId: "user_23456789fgds5678"
})

/** Should Error  */

sendEvent("SIGN_OUT", {});
sendEvent("LOG_IN", { userId: 123 });
sendEvent("LOG_IN", {});
sendEvent("LOG_IN");