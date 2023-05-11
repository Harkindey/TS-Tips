
import React, { ComponentProps } from "react";

type InputProps = Omit<ComponentProps<"input">, 'onChange'> & {
    onChange: (value:string) => void
};

interface InputProps2 extends Omit<ComponentProps<"input">, 'onChange'>{
    onChange: (value:string) => void
}

// Beautify


export const Input = (props: InputProps) => {// or InputProps2
    return (
        <input 
            {...props} 
            onChange={(e)=>{
                props.onChange(e.target.value)
            }}
        ></input>
    )
}


export const Parent = ()=> {
    return (
        <Input
            onChange={(e)=>{
                console.log(e)
            }}
        ></Input>
    )
}