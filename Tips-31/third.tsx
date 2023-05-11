
import React, { ComponentProps } from "react";

type OverideProps<T, TOverriden> = Omit<T, keyof TOverriden> & TOverriden; 
type InputProps = OverideProps<ComponentProps<"input">, {
    onChange: (value:string) => void
}>

export const Input = (props: InputProps) => {
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